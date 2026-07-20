# 02-next-transfer-booking

Двуязычный сайт бронирования трансферов для транспортной компании LONDON ROUTE TRANSFERS

## Стек

Next.js 16 (App Router), React, TypeScript, Tailwind CSS v4, next-intl, react-hook-form, zod

## Структура проекта

```
src/
  app/
    [locale]/                   # сегмент локали (en, ru)
      layout.tsx                # layout с header/footer и i18n-провайдером
      page.tsx                  # лендинг (hero, о компании, услуги, преимущества, контакты)
      services/page.tsx         # страница детального описания услуг
      booking/page.tsx          # форма бронирования
      manager/page.tsx          # список бронирований (моки, для менеджера)
      privacy/page.tsx          # политика конфиденциальности
      cookie-policy/page.tsx    # политика использования cookies
      terms/page.tsx            # условия использования
      transport-terms/page.tsx  # условия транспортных услуг
    layout.tsx                  # корневой layout (globals.css)
    globals.css                 # Tailwind v4 @theme токены
  components/
    ui/                         # переиспользуемые UI-компоненты (FadeIn)
    sections/                   # секции лендинга (Hero, About, ServicesSummary, Advantages, Contacts)
    booking-form/               # клиентские компоненты формы бронирования
    manager/                    # фильтры, список бронирований, пустое состояние
    legal/                      # компонент юридических страниц (LegalContent)
    layout/                     # Header, Footer, LanguageSwitcher, MobileMenu, Providers
  i18n/
    routing.ts                  # конфигурация локалей (en, ru)
    request.ts                  # getMessages для next-intl
  messages/
    en.json                     # переводы на английский
    ru.json                     # переводы на русский
  types/
    booking.ts                  # типы данных формы бронирования
    mock-bookings.ts            # типы моковых бронирований
    services.ts                 # типы услуг
  lib/
    validation.ts               # zod-схема валидации формы
    mock-data.ts                # моковые данные бронирований
    services-data.ts            # данные карточек услуг
    proxy.ts                    # next-intl middleware (переключение локалей)
docs/
  AGENTS.md                     # правила для агента
  AI_USAGE.md                   # журнал AI-запросов
  02-transfer-client-content.md # исходный клиентский текст (единственный источник контента)
  PROMPT_PLAN.md                # пошаговый план разработки
  TASK.md                       # краткая сводка задачи
  02-transfer-task-spec.md      # полное ТЗ и критерии приёмки
next.config.ts                  # конфигурация Next.js
tsconfig.json                   # TypeScript
package.json                    # зависимости и скрипты
postcss.config.mjs              # PostCSS (Tailwind)
eslint.config.mjs               # ESLint
```

## Основные разделы сайта

### Лендинг
- hero-экран с CTA
- о компании
- услуги
- преимущества
- контакты

### Страница услуг (/services)
- hero с описанием
- ключевые преимущества
- детальное описание каждого типа услуг
- CTA-блок

### Форма бронирования (/booking)
- контактные данные (имя, фамилия, компания, телефон, email)
- данные поездки (тип услуги, адрес подачи, пункт назначения, дата, время, пассажиры, встреча в аэропорту)
- комментарий и согласие на обработку данных
- состояния: idle → submitting → success/error

### Страница менеджера (/manager)
- таблица/карточки с моковыми бронированиями
- фильтр по статусу и поиск
- пустое состояние при отсутствии результатов

### Юридические страницы
- политика конфиденциальности
- политика использования cookies
- условия использования
- условия оказания транспортных услуг

## Запуск и подключение
 
### 1. Установка
 
Для работы с проектом нужен Node.js. Склонируйте репозиторий и перейдите в папку проекта:
 
```bash
git clone <ссылка на репозиторий>
cd 02-next-transfer-booking
```
 
Установите зависимости:
 
```bash
npm install
```
 
Эта команда скачивает все необходимые пакеты из package.json в папку node_modules.
 
### 2. Команды
 
| Команда | Описание |
|---|---|
| `npm run dev` | Запускает локальный сервер на http://localhost:3000 |
| `npm run build` | Собирает production-версию сайта. Полезно проверять перед деплоем — если сборка проходит без ошибок, проект готов к публикации |
| `npm run start` | Запускает собранную production-версию (после `npm run build`). Используется на сервере, но не нужен при локальной разработке |
| `npm run lint` | Проверяет код на ошибки и несоответствие стилю через ESLint. Запускайте перед коммитом |
 
### 3. Подключение backend
 
Фронтенд подключён к API-серверу бронирований, который находится в соседнем репозитории `03-backend-transfer-booking`. Чтобы поднять его:
 
```bash
cd ../03-backend-transfer-booking/backend
npm install
npm run start:dev
```
 
Backend должен быть запущен на http://localhost:3001 до отправки формы — без него форма бронирования покажет error-state, а страница менеджера — ошибку загрузки.
 
Что именно использует backend:
- форма бронирования отправляет данные через `POST /api/bookings`
- страница менеджера загружает список через `GET /api/bookings`
- смена статуса отправляет `PATCH /api/bookings/:id`

### 4. Проверка полного flow
 
1. Запустите backend: `npm run start:dev` (в папке `backend` репозитория `03-backend-transfer-booking`)
2. Запустите фронтенд: `npm run dev` (в этой папке)
3. Откройте http://localhost:3000/en/booking — заполните форму и отправьте
4. Откройте http://localhost:3000/en/manager — увидите созданное бронирование в списке
5. На странице менеджера можно поменять статус бронирования через select
