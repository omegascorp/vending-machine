# Vending Machine

## Requirments

* Node 12.20+ or 14.13+ or 16+
* Yarn
* Docker

## Before first run

1. Run the following command to pull the mongodb

```
docker-compose up
```

2. Initialize Replica Set

Run the following one by one in a new terminal

```
docker exec -it mongodb bash

mongo

rs.initiate({_id: "replocal", members: [{_id: 0, host: "127.0.0.1:27017"}] })
```

4. Kill docker-compose

Switch to the ternimal where docker-compose is running and press `Ctrl+C`

3. Copy env.local.json to env.json

```
cp env.local.json env.json
```

## Run 

Start docker

```
docker-componse start
```

Start project

```
yarn dev
```

## Test

```
yarn test
```

## Lint

```
yarn lint
```
