sudo chown -R $(whoami) ~/.docker

# Build
docker build -t omnistudy/web:dev -f ./docker/Dockerfile.dev .
# Run
docker run -dp 3000:3000 --name web omnistudy/web:dev