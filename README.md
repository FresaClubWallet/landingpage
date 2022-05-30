# Landing page Fresa - MERN stack docker (Mysql Express React Nodejs)

- Use Express Nodejs as backend
- Use React script as frontend
- Use MySQL as the database (v8)
- Include self-signed SSL certificate ([Let's Encrypt localhost](https://letsencrypt.org/docs/certificates-for-localhost/) format)
- You can use make command to build fast

## Table of contents

- [Host requirements](#reqts)
- [Configuration](#config)
- [Deploy](#deploy)
- [Teardown](#teardown)
- [Notes](#notes)


## <a name="reqts"></a>Host requirements

Both Docker and Docker Compose are required on the host to run this code

- Install Docker Engine: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
- Install Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## <a name="config"></a>Configuration

Copy the `env.example` file as `.env` in both folder backend & frontend then populate according to your environment
Create ssl folder in backend folder and copy your fullchain.pem & privatekey.pem

## <a name="deploy"></a>Deploy

Once configured the containers can be brought up using Docker Compose

1. Set the environment variables and build the images

    ```console
    docker-compose build
    ```

2. Bring up the landing page containers

    ```console
    docker-compose up -d 
    ```
    
    After a few moments the containers should be observed as running
    
    ```console
    $ docker-compose ps
    Name                  Command               State                                   Ports
    -----------------------------------------------------------------------------------------------------------------------------
    landingpage   docker-entrypoint.sh pm2-r ...   Up      0.0.0.0:443->443/tcp,:::443->443/tcp, 0.0.0.0:80->80/tcp,:::80->80/tcp
    ```
## <a name="teardown"></a>Teardown

For a complete teardown all containers must be stopped and removed along with the volumes and network that were created for the application containers

Commands

```console
docker-compose stop
docker-compose down
```

## <a name="notes"></a>Notes

### Let's Encrypt SSL Certificate

Use: [https://github.com/RENCI-NRIG/ez-letsencrypt](https://github.com/RENCI-NRIG/ez-letsencrypt) - A shell script to obtain and renew [Let's Encrypt](https://letsencrypt.org/) certificates using Certbot's `--webroot` method of [certificate issuance](https://certbot.eff.org/docs/using.html#webroot).

