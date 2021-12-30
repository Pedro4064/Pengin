# Pengin - Plugin System

## Overview

With the idea of being modular and future proof we built Pengin around the idea of plugins. Furthermore, utilizing the idea 
of microservices, each and every plugin will be a docker container running a REST API with pre-defined endpoints, that later on 
will be added to the docker-composer file and will be accessed by the main Pengin Django App.



## End-Points

As state previously, all plugins must have the following endpoints implemented, before they can be added to the docker-compose file:

| ENDPOINT | PAYLOAD |  DESCRIPTION | RESPONSE |
|----------|-------------|----------|
|search=<NAME> | `NAME`: The name of the target title |Endpoint to search for a manga series by its title | `{'results': [{'Title':..., 'Author':..., 'Genres':[...], 'Cover Art':...}, 'Payload': ... {PAYLOAD}]}`
|download| `PAYLOAD`: The json payload that was passed as response by the search endpoint 
