tinyflow
=======
tinyflow is an image uploader plugin for tinymce (version 4.x) using angularJS, ng-flow and semantic-ui. 

Thanks [justboil.me](http://justboil.me) for inspiration and sourcecode so I can create this project.

How I can install it?
===============
 1. Clone or download this project
 2. extract project file to tinymce's plugin folder.
 
Usage
=====
 1.  open `dialog-v5.htm` inside plugin directory.
 2. locate the `self.myFlow` in dialog-v5.html.
 3. modify `target` property in `self.myFlow` to your upload url.

Example
=======

````javascript
self.myFlow = new Flow({
            target: '/tinymce-upload',
            singleFile: true,
            method: 'post',
            testChunks: false,
            headers: function (file, chunk, isTest) {
                return {
                    'X-XSRF-TOKEN': $cookies.get('XSRF-TOKEN')// call func for getting a cookie
                }
            }
        })
````

Example above use $cookies.get('XSRF-TOKEN') in header for verify csrf token when using Laravel5.