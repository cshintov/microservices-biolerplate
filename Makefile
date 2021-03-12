login:
	bash ./deploy/scripts/ecr-auth.sh
	echo "logged into ecr"
	
build:
	cd $(SERVICE) && docker build . -t $(SERVICE):$(VERSION)
	docker tag $(SERVICE):$(VERSION) $(AWS_ECR)/$(SERVICE):$(VERSION)

push:
	docker push $(AWS_ECR)/$(SERVICE):$(VERSION)

portfwd:
	kubectl port-forward service/patins http &
	kubectl port-forward service/patdemo nginx &
	kubectl port-forward service/bff bff &
	kubectl port-forward service/spa spa &

pfk:
	pkill kubectl
