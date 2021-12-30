# Notes

## Micro-services

### Communication 
Regarding the communication between the services we will have the following:
- [UI-DB/UI-CONTENT MANAGER] - Sync
- [CONTENT MANAGER - PLUGINS] - Async

### Queue

Each plugin will most probably be asked to download more than one manga at once, 
because of that we need to find a way of making a queue + make the communication 
between the plugin and the content manager asynchronous.
