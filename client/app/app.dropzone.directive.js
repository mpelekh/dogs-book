export default dropZoneDirective;

function dropZoneDirective() {
    'ngInject';

    return function (scope, element, attrs) {
        element.dropzone({
            url                 : "/upload",
            maxFilesize         : 1000,
            paramName           : "uploadfile",
            maxThumbnailFilesize: 5,
            addRemoveLinks      : true,
            _fileRefs           : [],
            init                : function () {
                var me = this;

                // if (mockFiles.length) {
                //     mockFiles.map(function (mockfile) {
                //         var pathToFile = '';

                //         me.options.addedfile.call(me, mockfile);

                //         if (mockfile.type.indexOf('image') > -1) {
                //             pathToFile = PATH_TO_FILES.instances.thumb + '/h100/' + mockfile.fileName;
                //             me.options.thumbnail.call(me, mockfile, pathToFile);
                //         }
                //     });
                // }

                this.on('success', function (file, json) {
                    const resultFileInfo = {
                        fileName    : json.fileName,
                        userFileName: json.userFileName,
                        type        : file.type || 'unknown',
                        size        : file.size
                    };

                    if (json.success) {
                        file.fileName = json.fileName;
                        scopeFiles = scope.$eval(attrs.files);
                        scopeFiles && scope.$apply(function () {
                            scopeFiles.push(resultFileInfo);
                        });
                    }

                    cbOnSuccessUpload && cbOnSuccessUpload(resultFileInfo, () => {
                        if (onlyForOneFile) {
                            file.previewElement.parentNode.removeChild(file.previewElement);
                            me.emit('reset');
                        } else {
                            _fileRefs.push(file.previewElement);

                            return () => {
                                _fileRefs.forEach(ref => {
                                    try {
                                        ref.parentNode.removeChild(ref);
                                    } catch (error) {
                                        //do nothing
                                    }
                                });

                                _fileRefs.length = 0;
                                scopeFiles = scope.$eval(attrs.files);

                                me.emit('reset');
                            }
                        }
                    });
                });
                this.on('addedfile', function (file) {
                    // TODO:
                });
                this.on('drop', function (file) {
                    // TODO:
                });
            },
            removedfile         : function (file) {
                var ws         = ttdWebSocketFactory.getWebSocket(),
                    ref        = file.previewElement,
                    fileRemove = {
                        fileName: file.fileName
                    };

                if (isEditMode && file.isAlreadyUploaded) {
                    fileRemove.isEditMode = true;
                    fileRemove.id = file.id;
                }

                scopeFiles = scope.$eval(attrs.files);
                scopeFiles && scope.$apply(function () {
                    scopeFiles.map(function (scopeFile, index) {
                        if (scopeFile.id === file.id) {
                            scopeFiles.splice(index, 1);
                        }
                    });
                });

                ws.send('instanceFile remove', fileRemove);

                return ref != null ? ref.parentNode.removeChild(file.previewElement) : void 0;
            }
        });
    }
}
