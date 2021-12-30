# Pengin - Plugin System

## Overview

With the idea of being modular and future proof we built Pengin around the idea of plugins. Furthermore, utilizing the idea 
of microservices, each and every plugin will be a docker container running a REST API with pre-defined endpoints, that later on 
will be added to the docker-composer file and will be accessed by the main Pengin Django App.
