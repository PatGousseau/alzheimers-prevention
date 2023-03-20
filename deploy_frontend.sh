# export REACT_APP_API_URL=http://localhost:8080/api
echo "Deploying frontend to AWS"
cd frontend
export REACT_APP_API_URL=/api
npm run build
aws s3 sync build/ s3://lubav-frontend

aws cloudfront create-invalidation --distribution-id EZH3SQJ5DO1I1 --paths "/*"