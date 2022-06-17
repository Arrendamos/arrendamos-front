echo "Switching to branch master"
git checkout main

echo "Buliding app..."
npm run build

echo "Deploying files to server..."
scp -r -i ./arrendamos-key.pem build/* ubuntu@ec2-34-219-105-66.us-west-2.compute.amazonaws.com:/var/www/arrendamos

echo "Done!"
