sudo chown -R $(whoami) ~/.docker

# Build
docker build -t omnistudy/web:staging -f ./docker/Dockerfile.staging .
# Run
docker run -dp 80:80 --name web omnistudy/web:staging