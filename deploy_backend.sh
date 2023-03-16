echo "Deploying Backend..."
cd backend
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 625218769979.dkr.ecr.us-east-1.amazonaws.com
docker buildx build --platform linux/amd64 -t lubav-backend .
docker tag lubav-backend:latest 625218769979.dkr.ecr.us-east-1.amazonaws.com/lubav-backend:latest
docker push 625218769979.dkr.ecr.us-east-1.amazonaws.com/lubav-backend:latest
cd aws_deploy
eb deploy