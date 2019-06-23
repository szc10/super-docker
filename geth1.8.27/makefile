.PHONY: build run
REGISTRY ?= szc10
REPO  ?= gath
TAG   ?= latest  # 1.8.27
build:
	docker build -t $(REGISTRY)/$(REPO):$(TAG) .
push:
	docker push $(REGISTRY)/$(REPO):$(TAG)	