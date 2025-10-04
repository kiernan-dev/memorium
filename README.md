# Memorium

A compassionate web application for creating memorial content including eulogies, condolence messages, tribute walls, and QR codes for sharing memories. Built with Astro and powered by AI to help people during difficult times.

## Features

- **Eulogy Generator**: Create heartfelt tributes with AI assistance
- **Condolence Message Creator**: Express sympathy with thoughtful words
- **Brief Message Tribute Wall**: Share memories and condolences
- **Share-a-Memory QR Code**: Easy sharing at services and gatherings

## Tech Stack

- **Framework**: Astro with hybrid SSR using Node.js adapter
- **Frontend**: Astro components with Tailwind CSS
- **AI Integration**: OpenAI/Anthropic API via OpenRouter
- **Styling**: Tailwind CSS with custom memorial color palette
- **Package Manager**: PNPM

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your API configuration:
   ```env
   OPENAI_API_KEY=your_openrouter_api_key
   OPENAI_BASE_URL=https://openrouter.ai/api/v1
   OPENAI_MODEL=anthropic/claude-3-haiku
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Preview production build**
   ```bash
   pnpm run preview
   ```

## API Configuration

The application supports multiple AI providers:

### OpenRouter (Recommended)
```env
OPENAI_API_KEY=your_openrouter_api_key
OPENAI_BASE_URL=https://openrouter.ai/api/v1
OPENAI_MODEL=anthropic/claude-3-haiku
```

### OpenAI
```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4
```

### Anthropic Claude
```env
OPENAI_API_KEY=your_anthropic_api_key
OPENAI_BASE_URL=https://api.anthropic.com/v1
OPENAI_MODEL=claude-sonnet-4-20250514
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base layout with header and styling
├── pages/
│   ├── index.astro           # Homepage with feature cards
│   ├── eulogy-generator.astro
│   ├── condolence-creator.astro
│   ├── tribute-wall.astro
│   └── qr-code.astro
├── lib/
│   └── ai.ts                 # AI integration module
└── styles/
    └── components.css        # Tailwind component classes
```

## Key Files

- `astro.config.mjs` - Astro configuration with hybrid output and Node.js adapter
- `tailwind.config.mjs` - Tailwind configuration with memorial color palette
- `src/lib/ai.ts` - AI integration supporting OpenAI/Anthropic APIs
- `CLAUDE.md` - Detailed guidance for Claude Code development

## Development

The application uses:
- **SSR**: Server-side rendering for form handling and AI generation
- **View Transitions**: Smooth page navigation
- **Loading States**: Full overlay loading indicators
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Memorial Theme**: Custom color palette and typography

## Contributing

This project is designed to help people during difficult times. Please ensure all contributions maintain the compassionate and respectful tone of the application.

## License

MIT License - see LICENSE file for details