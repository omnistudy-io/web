docker build --no-cache -t omnistudy/web -f ./docker/Dockerfile.dev .

docker run \
    -dp 3000:3000 \
    --name web \
    -v $(pwd):/web \
    omnistudy/web