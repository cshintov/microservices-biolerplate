login:
	bash ./deploy/scripts/ecr-auth.sh
	echo "logged into ecr"
	
build:
	cd patdemo && docker build . -t $(SERVICE):$(VERSION)
	docker tag $(SERVICE):$(VERSION) $(AWS_ECR)/$(SERVICE):$(VERSION)

push:
	docker push $(AWS_ECR)/$(SERVICE):$(VERSION)
