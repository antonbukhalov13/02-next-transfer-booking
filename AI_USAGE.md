## Request 1

Goal: получить AGENTS.md с инструкциями для будущих агентных сессий на основе ТЗ и клиентского текста

Prompt: 0 — генерация AGENTS.md

Изучи TASK.md, docs/TASK_SPEC.md и docs/CLIENT_CONTENT.md в корне проекта и на их основе составь AGENTS.md с инструкциями для будущих агентных сессий: обязательный стек, структура проекта, ограничения (без backend, форма не связана со списком бронирований), i18n-конвенции, server/client разделение, DoD-чеклист.

Result: создан AGENTS.md. Файл включает: обязательный стек (Next.js App Router, React, TS, Tailwind v4, next-intl, react-hook-form, zod); структуру проекта — предложенный layout src/ с app/[locale]/, компонентами, типами, i18n; server/client разделение — статика на сервере, интерактив на клиенте; i18n-конвенции — JSON-файлы переводов, useTranslations, generateMetadata per locale; ограничения — нет backend, форма и список бронирований не связаны, без localStorage/API; требования к форме и mock-данным из TASK_SPEC.md; DoD-чеклист из 22 пунктов, включая npm run build/lint без ошибок.

Used as-is / edited manually / rejected: edited manually

What I learned: для технической части удобнее полагаться на автоанализ агента, а смысловые ограничения и открытые решения из ТЗ (то, что требует явного объяснения на ревью) лучше прописывать вручную

Model used: big-pickle

Instrument used: OpenCode

## Request 2

Goal: инициализировать Next.js-проект и создать структуру папок

Prompt: 1.1 — инициализация проекта и структура папок

Инициализируй Next.js проект с App Router и TypeScript (create-next-app с флагами --typescript --app --src-dir, без ESLint-конфига пока не важно, но можно оставить). После инициализации создай структуру папок внутри src/: app/, components/ui/, components/sections/, components/booking-form/, components/manager/, components/legal/, components/layout/, i18n/, messages/, types/, lib/. На этом шаге не добавляй бизнес-логику и контент — только структуру и пустые index/placeholder файлы там, где нужно, чтобы Next.js не ругался на пустые папки.

Result: Next.js 16.2.10 инициализирован через create-next-app (TypeScript, App Router, Tailwind CSS v4, src-dir). Установлены пакеты next-intl, react-hook-form, zod. Создана структура src/: app/[locale]/ с 8 роутами (page, services, booking, manager, privacy, cookie-policy, terms, transport-terms), components/ (ui, sections, booking-form, manager, legal, layout), i18n/ (routing.ts, request.ts), messages/ (en.json, ru.json с плейсхолдерами), types/ (booking.ts, mock-bookings.ts, services.ts), lib/ (validation.ts с zod-схемой, mock-data.ts с одним мок-записью). Созданы placeholder-страницы для всех роутов. `npm run build` и `npm run lint` проходят без ошибок.

Used as-is / edited manually / rejected: used as-is

What I learned: zod v4 изменил API для z.literal — errorMap заменён на refine; импорт из next-intl/server требует отдельной установки пакета next-intl; params в layout.tsx [locale] — async Promise в Next.js 16, нужен await

Model used: big-pickle

Instrument used: OpenCode
