# Notes

# To Be Determined 
## DOWNLOADERS 
- The Downloaders need to be independent from the main thread, since they are heavy and take time.
- Because of that we may need something like Celery to make a queue etc, but i don't quite get it (F).
- Another possibility would be to make it an async communication between the main plugin container and the 
downloader container (but that would take a long time to put together so if the previous option is plausible we should take that)
## Micro-services

### Communication 
Regarding the communication between the services we will have the following:
- [UI-DB/UI-CONTENT MANAGER/ CONTENT MANAGER - PLUGINS] - Sync
- [PLUGINS - DOWNLOADERS] - Async

### Queue

Each plugin will most probably be asked to download more than one manga at once, 
because of that we need to find a way of making a queue + make the communication 
between the plugin and the content manager asynchronous.
