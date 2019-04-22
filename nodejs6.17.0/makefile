.PHONY: build run
REGISTRY ?= szc10
REPO  ?= nodejs
TAG   ?= 6.17.0
build:
	docker build -t $(REGISTRY)/$(REPO):$(TAG) .
	
push: 
	docker push $(REGISTRY)/$(REPO):$(TAG)

show:
	echo $(REGISTRY)/$(REPO):$(TAG)