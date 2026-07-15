## Request 1

Goal: получить AGENTS.md с инструкциями для будущих агентных сессий на основе ТЗ и клиентского текста

Prompt: 0 — генерация AGENTS.md

Изучи TASK.md, docs/TASK_SPEC.md и docs/CLIENT_CONTENT.md в корне проекта и на их основе составь AGENTS.md с инструкциями для будущих агентных сессий: обязательный стек, структура проекта, ограничения (без backend, форма не связана со списком бронирований), i18n-конвенции, server/client разделение, DoD-чеклист.

Result: создан AGENTS.md. Файл включает: обязательный стек (Next.js App Router, React, TS, Tailwind v4, next-intl, react-hook-form, zod); структуру проекта — предложенный layout src/ с app/[locale]/, компонентами, типами, i18n; server/client разделение — статика на сервере, интерактив на клиенте; i18n-конвенции — JSON-файлы переводов, useTranslations, generateMetadata per locale; ограничения — нет backend, форма и список бронирований не связаны, без localStorage/API; требования к форме и mock-данным из TASK_SPEC.md; DoD-чеклист из 22 пунктов, включая npm run build/lint без ошибок.

Used as-is / edited manually / rejected: edited manually

What I learned: для технической части удобнее полагаться на автоанализ агента, а смысловые ограничения и открытые решения из ТЗ (то, что требует явного объяснения на ревью) лучше прописывать вручную

Model used: OpenCode Zen

Instrument used: OpenCode