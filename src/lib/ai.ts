interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Log AI configuration on module load
const apiKey = import.meta.env.OPENAI_API_KEY;
const baseUrl = import.meta.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const model = import.meta.env.OPENAI_MODEL || 'gpt-4';

console.log('🚀 Memorium AI Module Loaded');
console.log(`🤖 AI Model: ${model}`);
console.log(`🔗 Base URL: ${baseUrl}`);
console.log(`🔑 API Key: ${apiKey ? 'Configured' : 'Missing'}`);
console.log('---');

export async function generateCompletion(
  messages: ChatMessage[],
  temperature: number = 0.7
): Promise<string> {
  const apiKey = import.meta.env.OPENAI_API_KEY;
  const baseUrl = import.meta.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
  const model = import.meta.env.OPENAI_MODEL || 'gpt-4';

  // Log connection info on first call
  console.log(`🤖 AI Model: ${model}`);
  console.log(`🔗 Base URL: ${baseUrl}`);

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }

  // Handle Anthropic Claude API
  if (baseUrl.includes('anthropic.com')) {
    const response = await fetch(`${baseUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 1000,
        temperature,
        messages: messages.filter(m => m.role !== 'system'),
        system: messages.find(m => m.role === 'system')?.content
      })
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }

  // Handle OpenAI API
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: 1000
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}