# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Olea Pizzeria - Maintenance Page

Pizza temalı bakım sayfası 🍕

## Kurulum ve Çalıştırma

### Docker ile çalıştırma

```bash
# Docker image'ı build et
docker build -t oleapizzeria-maintenance .

# Container'ı çalıştır
docker run -d -p 4001:4001 --name oleapizzeria-maintenance oleapizzeria-maintenance
```

### Docker Compose ile çalıştırma (Önerilen)

```bash
# Servisi başlat
docker-compose up -d

# Logları görüntüle
docker-compose logs -f

# Servisi durdur
docker-compose down
```

### Güncelleme

```bash
# Yeni değişiklikleri aldıktan sonra
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Nginx Proxy Ayarları

Sunucunuzda `/etc/nginx/sites-available/oleapizzeria.com` dosyanız şu şekilde olmalı:

```nginx
server {
    listen 80;
    server_name oleapizzeria.com;

    location / {
        proxy_pass http://127.0.0.1:4001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## CloudFlare DNS Ayarları

- Tip: A
- İsim: @
- Değer: [Sunucu IP Adresi]
- Proxy: On (Turuncu bulut)

## Dosya Yapısı

```
.
├── index.html          # Ana bakım sayfası
├── Dockerfile          # Docker build ayarları
├── docker-compose.yml  # Compose ayarları
├── nginx.conf          # Nginx konfigürasyonu
├── .gitignore         # Git ignore kuralları
└── README.md          # Bu dosya
```

## Port Bilgisi

- Container içi: 4001
- Host makinesi: 4001
- Nginx proxy: 80 → 4001

Bu sayede oleapizzeria.com:80 → localhost:4001 proxy'si çalışacak.

## CI/CD Pipeline

### GitHub Actions

Bu proje otomatik CI/CD pipeline'ı içerir:

**Pull Request'lerde:**
- Docker build test
- Container'ın çalışıp çalışmadığını test eder
- Sorun varsa PR'ı red eder

**Release'lerde:**
- Docker image build eder
- GitHub Container Registry'ye push eder
- Release tag'ini kullanır (latest değil)

### Release Yapma

```bash
# Git tag oluştur
git tag v1.0.0
git push origin v1.0.0

# GitHub'da release oluştur
# Otomatik olarak ghcr.io'ya push edilecek
```

### Sunucuda Production Deploy

```bash
# GitHub Container Registry'den çek
docker pull ghcr.io/[username]/[repo-name]:v1.0.0

# Eski container'ı durdur
docker-compose down

# Yeni image ile başlat
docker run -d -p 4001:4001 --name oleapizzeria-maintenance ghcr.io/[username]/[repo-name]:v1.0.0
```

### Container Registry

Image'lar şu adreste bulunur:
`ghcr.io/[github-username]/[repo-name]:[tag]`
