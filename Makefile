help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

pull: ## pull latest source code
	git pull || true

build: ## build container
	docker-compose build
build-start: ## build container & start
	docker-compose up -d --build
start: ## start container
	docker-compose up -d
restart: ## restart containter
	docker-compose restart
stop: ## stop container
	docker-compose stop
down: ## stop & remove container
	docker-compose down
status: ## get status container
	docker-compose ps
logs: ## print latest container's logs
	docker-compose logs -f 
