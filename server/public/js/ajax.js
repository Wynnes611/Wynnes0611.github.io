function ajax(options) {
  var defaults = {
    type: "get",
    url: "",
    data: {},
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    success: function () {},
    error: function (obj) {
      console.log(obj);
    },
  };

  Object.assign(defaults, options);
  options = defaults;
  var xhr = new XMLHttpRequest();
  var params = "";
  for (var attr in options.data) {
    params = params + "&" + attr + "=" + options.data[attr];
  }
  params = params.substr(1);
  if (options.type == "get") {
    if (params.length == 0) {
      xhr.open(options.type, options.url);
    } else {
      if (options.url.indexOf("?") == -1) {
        xhr.open(options.type, options.url + "?" + params);
      } else {
        xhr.open(options.type, options.url + "&" + params);
      }
    }
    xhr.send();
  } else if (options.type == "post") {
    xhr.open(options.type, options.url);
    var ContentType = options.header["Content-type"];
    if (ContentType == "application/x-www-form-urlencoded") {
      xhr.setRequestHeader("Content-type", ContentType);
      xhr.send();
    } else if (ContentType == "application/json") {
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(options.data));
      //   console.log(params);
    }
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var reg = /^\{(.+:.+,*){1,}\}$/;
        if (reg.test(xhr.responseText)) {
          options.success(JSON.parse(xhr.responseText));
        } else {
          options.success;
        }
      } else {
        options.error(xhr);
      }
    }
  };
}
