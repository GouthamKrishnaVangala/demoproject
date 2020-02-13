import { group, sleep } from 'k6';
var http = require("k6/http");

// Version: 1.2
// Creator: Firefox
// Browser: Firefox

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - ", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://store.mosaiq.one/",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Upgrade-Insecure-Requests": "1",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/bootstrap/4.3.1/css/bootstrap.min.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/mosaiq-store.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/store-header.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/nav-bar.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/product-filter.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/product-search.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/product-catalogue/product-card.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/store-footer.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/components/components.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Muli:400,700,900&display=swap",
			"params": {
				"headers": {
					"Host": "fonts.googleapis.com",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/jquery/3.4.1/jquery.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/popper.js/1.14.3/popper.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/bootstrap/4.3.1/js/bootstrap.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/global-fragments/product-search.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/global-fragments/login.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/global-fragments/header_onScroll.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/components/mosaiq-alert.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/mosaiq-store-logo.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/search.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/jquery/3.4.1/jquery.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/account.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/css/global-fragments/nav-bar.css",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/arrow-dropdown.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/1d___2d_code_reader.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/star.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/2d_robotic_kinematics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/3d_camera_handler.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/3d_robotic_kinematics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/5d_robotic_kinematics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/a360_iot_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/aws_iot_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/alarm_handler.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/alibaba_cloud_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/apache_http_server.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/audit_trail.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/azure_iot_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/convert.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/date_and_time.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/data_handling.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/data_logger.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/eco_drive.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/eclipse_mosquitto.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/edgex_foundry.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/ethernet_ip.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_basic_motion.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_cross_sealing_cutting.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_electrical_shaft_position.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_electrical_shaft_velocity.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_flex_cam.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_flying_saw.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_magictrack.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_pick___place_advanced.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_pick___place_basic.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_register_control.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_smarttrack.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_table_positioning.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_temperature_control.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_tracking_management.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_virtual_master.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_winder_dancer.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/fast_winder_tension.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/file_handler.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/hybrid_data_analytics_toolbox.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/hydraulic_control_toolbox.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/hydraulic_pump_control.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/hydraulic_valve_control.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/iec61131_3_functions.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/ixon_cloud_connector.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/internet_protocol_suite.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/json_utilities.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/java_virtual_machine.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/leakage_diagnostics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/linuxcnc.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mimo_controller.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mqtt_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mainflux.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mathworks_embedded_coder.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mathworks_simulink_coder.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mathematics_basics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/modbustcp.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/model_based_pressure_regulation.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mosaiq_standard_library.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/node_red.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/notifier.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/oee_calculator.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/oscat_lib.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/object_inspection.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/object_recognition.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/opencv.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/pid_controller.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/plcopen_opc_ua.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/plcopen_motion_control.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/packml_handler.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/pneumatic_basic_functions.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/predictive_maintainance_kit.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/presetting_of_travel_time.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/profile_generator.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/proportional_pressure_regulation.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/rfid_reader.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/ros___robot_operating_system.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/recipe_management.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/remote_access_gateway.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/report_generator.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/sap_cloud_platform_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/sql_connector.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/safety_brake_toolbox.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/safety_motion_toolbox.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/safety_robotics_toolbox.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/safety_toolbox.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/signal_processing.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/signals.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/soft_stop.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/static_robotic_kinematics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/tensorflow_keras.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/u_mation_anomaly_detection.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/u_mation_predictive_maintenance.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/u_mation_predictive_quality.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/u_mation_anomaly_classification.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/wl4sc_3_a00_function_block_library.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/xml2data.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/balenacloud_client.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/dweet.io.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/mxautomation.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/nginx_web_server.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Cache-Control": "max-age=0",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/favicon.ico",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive"
				}
			}
		}];
		res = http.batch(req);
		sleep(9.28);
		req = [{
			"method": "get",
			"url": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/",
					"Upgrade-Insecure-Requests": "1",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/mosaiq-store.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/bootstrap/4.3.1/css/bootstrap.min.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/store-header.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/product-filter.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/nav-bar.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/product-search.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/product-profile/product-profile.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/css/global-fragments/store-footer.css",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/jquery/3.4.1/jquery.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/popper.js/1.14.3/popper.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/bootstrap/4.3.1/js/bootstrap.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/global-fragments/product-search.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/global-fragments/login.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Muli:400,700,900&display=swap",
			"params": {
				"headers": {
					"Host": "fonts.googleapis.com",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "text/css,*/*;q=0.1",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/js/global-fragments/header_onScroll.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/mosaiq-store-logo.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/search.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/webjars/jquery/3.4.1/jquery.min.js",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/account.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/css/global-fragments/nav-bar.css",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/files/2d_robotic_kinematics.png",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/icons/star.svg",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive",
					"Referer": "https://store.mosaiq.one/products/da40bfca-d5f2-4cf0-9383-94d37c0e6087",
					"TE": "Trailers"
				}
			}
		},{
			"method": "get",
			"url": "https://store.mosaiq.one/favicon.ico",
			"params": {
				"headers": {
					"Host": "store.mosaiq.one",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0",
					"Accept": "image/webp,*/*",
					"Accept-Language": "en-US,en;q=0.5",
					"Accept-Encoding": "gzip, deflate, br",
					"DNT": "1",
					"Connection": "keep-alive"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
