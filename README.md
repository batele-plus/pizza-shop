# 🍕 Пиццерия - Интернет-магазин пиццы

Современное веб-приложение для заказа пиццы, построенное на Next.js с TypeScript, использующее PostgreSQL для хранения данных и современный стек технологий.

## 📋 Содержание

- [Технологии](#технологии)
- [Требования](#требования)
- [Установка и запуск](#установка-и-запуск)
- [Переменные окружения](#переменные-окружения)
- [Структура проекта](#структура-проекта)
- [API Endpoints](#api-endpoints)
- [Компоненты](#компоненты)
- [База данных](#база-данных)
- [Развертывание](#развертывание)

## 🚀 Технологии

### Frontend

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **shadcn/ui** - Современные UI компоненты
- **Lucide React** - Иконки
- **React Hook Form** - Управление формами
- **Zod** - Валидация схем
- **Zustand** - Управление состоянием
- **TanStack Query** - Управление серверным состоянием

### Backend

- **Hono** - Быстрый веб-фреймворк
- **Drizzle ORM** - TypeScript ORM
- **PostgreSQL** - Реляционная база данных
- **Zod OpenAPI** - API документация
- **Nodemailer** - Отправка email

### Инструменты разработки

- **ESLint** - Линтер кода
- **Prettier** - Форматирование кода
- **Drizzle Kit** - Миграции базы данных

## 📋 Требования

- Node.js 18+
- PostgreSQL 14+
- npm или yarn

## 🛠 Установка и запуск

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd pizza-shop
```

### 2. Установка зависимостей

```bash
npm install
# или
yarn install
```

### 3. Настройка переменных окружения

Создайте файл \`.env.local\` в корне проекта:

- DATABASE_URL - ссылка на базу данных
- GMAIL_USER - твой gmail
- GMAIL_PASSWORD - пароль который надо сгенерировать на сайте https://myaccount.google.com/apppasswords

```env
# База данных
DATABASE_URL="postgresql://username:password@localhost:5432/pizza_shop"

# Email (Gmail)
GMAIL_USER="your-email@gmail.com"
GMAIL_PASSWORD="your-app-password"
```

### 4. Настройка базы данных

```bash
# Генерация миграций
npm run db:generate

# Применение миграций
npm run db:migrate

# Заполнение тестовыми данными
npm run db:seed
```

### 5. Запуск проекта

```bash
# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm run start
```

Приложение будет доступно по адресу: \`http://localhost:3000\`

## 🔐 Переменные окружения

| Переменная         | Описание                       | Обязательная |
| ------------------ | ------------------------------ | ------------ |
| \`DATABASE_URL\`   | URL подключения к PostgreSQL   | ✅           |
| \`GMAIL_USER\`     | Email для отправки уведомлений | ✅           |
| \`GMAIL_PASSWORD\` | Пароль приложения Gmail        | ✅           |

### Настройка Gmail

1. Включите двухфакторную аутентификацию в Google аккаунте
2. Создайте пароль приложения в настройках безопасности
3. Используйте этот пароль в переменной \`GMAIL_PASSWORD\`

## 📁 Структура проекта

```
pizza-shop/
├── app/                          # Next.js App Router
│   ├── api/                      # API маршруты
│   │   └── [[...route]]/         # Hono API обработчики
│   ├── api-demo/                 # Демо страница API
│   ├── globals.css               # Глобальные стили
│   ├── layout.tsx                # Корневой layout
│   └── page.tsx                  # Главная страница
├── components/                   # React компоненты
│   ├── ui/                       # shadcn/ui компоненты
│   ├── api-example.tsx           # Демо API компонент
│   ├── cart.tsx                  # Корзина покупок
│   ├── footer.tsx                # Подвал сайта
│   ├── hero.tsx                  # Главный баннер
│   ├── item-card.tsx             # Карточка пиццы
│   ├── item-grid.tsx             # Сетка товаров
│   ├── order-form.tsx            # Форма заказа
│   ├── providers.tsx             # Провайдеры контекста
│   └── theme-provider.tsx        # Провайдер темы
├── hooks/                        # Пользовательские хуки
│   ├── use-mobile.tsx            # Определение мобильного устройства
│   ├── use-pizza-items.ts        # Загрузка пицц
│   ├── use-place-order.tsx       # Оформление заказа
│   └── use-toast.ts              # Уведомления
├── lib/                          # Утилиты и конфигурация
│   ├── api/                      # API функции
│   ├── db/                       # База данных
│   ├── email/                    # Email сервис
│   ├── stores/                   # Zustand хранилища
│   ├── validations/              # Zod схемы
│   ├── env.ts                    # Валидация переменных окружения
│   └── utils.ts                  # Общие утилиты
├── scripts/                      # Скрипты
│   └── seed.ts                   # Заполнение БД
├── drizzle/                      # Миграции БД
└── public/                       # Статические файлы
```

## 🌐 API Endpoints

### Swagger документация

- **GET** \`/api/swagger\` - Интерактивная документация API

### Пиццы

- **GET** \`/api/items\` - Получить список пицц
  - Query параметры:
    - \`limit\` (number): Количество элементов (1-100, по умолчанию 10)
    - \`offset\` (number): Смещение (по умолчанию 0)
    - \`popular\` (boolean): Фильтр по популярности

### Заказы

- **POST** \`/api/order\` - Создать заказ
  - Body:
    ```json
    {
      "items": [
        {
          "itemId": 1,
          "quantity": 2
        }
      ],
      "fullName": "Иван Иванов",
      "phone": "+7 900 123 45 67",
      "email": "ivan@example.com"
    }
    ```

## 🧩 Компоненты

### Основные компоненты

#### \`Hero\`

Главный баннер с призывом к действию

- Адаптивный дизайн
- Кнопки навигации
- Анимированные элементы

#### \`ItemGrid\`

Сетка товаров с фильтрацией

- Поддержка пагинации
- Фильтр по популярности
- Состояния загрузки и ошибок

#### \`ItemCard\`

Карточка отдельной пиццы

- Изображение товара
- Добавление в корзину
- Управление количеством

#### \`Cart\`

Корзина покупок

- Управление количеством товаров
- Подсчет общей стоимости
- Удаление товаров

#### \`OrderForm\`

Форма оформления заказа

- Валидация полей
- Интеграция с корзиной
- Отправка заказа

### UI Компоненты (shadcn/ui)

- \`Button\` - Кнопки различных стилей
- \`Card\` - Карточки контента
- \`Input\` - Поля ввода
- \`Label\` - Подписи к полям
- \`Badge\` - Значки и метки
- \`Alert\` - Уведомления
- \`Skeleton\` - Заглушки загрузки

## 🗄 База данных

### Схема базы данных

#### Таблица \`pizza_items\`

```sql
CREATE TABLE pizza_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT NOT NULL,
  popular BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP DEFAULT now() NOT NULL
);
```

#### Таблица \`orders\`

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP DEFAULT now() NOT NULL
);
```

#### Таблица \`order_items\`

```sql
CREATE TABLE order_items (
  order_id INTEGER REFERENCES orders(id) NOT NULL,
  item_id INTEGER REFERENCES pizza_items(id) NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP DEFAULT now() NOT NULL
);
```

### Команды для работы с БД

```bash
# Генерация миграций
npm run db:generate

# Применение миграций
npm run db:migrate

# Откат миграций
npm run db:drop

# Заполнение тестовыми данными
npm run db:seed

# Студия Drizzle (GUI для БД)
npm run db:studio

# Push схемы без миграций (для разработки)
npm run db:push
```

## 🚀 Развертывание

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения в панели Vercel
3. Разверните проект

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Переменные окружения для продакшена

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
GMAIL_USER="your-production-email@gmail.com"
GMAIL_PASSWORD="your-production-app-password"
```

## 🔧 Скрипты package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push",
    "db:drop": "drizzle-kit drop",
    "db:seed": "tsx scripts/seed.ts",
    "db:studio": "drizzle-kit studio"
  }
}
```

## 🤝 Участие в разработке

1. Форкните репозиторий
2. Создайте ветку для новой функции (\`git checkout -b feature/amazing-feature\`)
3. Зафиксируйте изменения (\`git commit -m 'Add amazing feature'\`)
4. Отправьте в ветку (\`git push origin feature/amazing-feature\`)
5. Откройте Pull Request

## 📝 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🆘 Поддержка

Если у вас возникли вопросы или проблемы:

1. Проверьте [Issues](https://github.com/your-repo/issues)
2. Создайте новый Issue с подробным описанием
3. Свяжитесь с командой разработки

## 🎯 Планы развития

- [ ] Интеграция с платежными системами
- [ ] Система лояльности
- [ ] Мобильное приложение
- [ ] Многоязычность
- [ ] Система отзывов
- [ ] Интеграция с доставкой

---

**Сделано с ❤️ командой разработки**
