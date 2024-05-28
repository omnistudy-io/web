sudo chown -R $(whoami) ~/.docker

# Build
docker build -t omnistudy/web:prod -f ./docker/Dockerfile.prod .
# Run
docker run -dp 80:80 --name web omnistudy/web:prod