install: # Установка модулей
	npm ci

brain-games: # Вызов приветствия
	node bin/brain-games.js

publish: # Публикация
	npm publish --dry-run 

lint: # Запускает eslint
	npx eslint