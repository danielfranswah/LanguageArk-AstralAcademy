import http.server
import socketserver
import sys

PORT = 8080
DIRECTORY = '/Users/danielfranswah/Downloads/Language Ark Final'

class ThreadingHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

class NoCacheHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def handle_one_request(self):
        try:
            super().handle_one_request()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def log_message(self, format, *args):
        sys.stderr.write(f'[{self.log_date_time_string()}] {self.client_address[0]} {format % args}\n')

if __name__ == '__main__':
    with ThreadingHTTPServer(('0.0.0.0', PORT), NoCacheHTTPHandler) as httpd:
        print(f'Serving HTTP on 0.0.0.0 port {PORT} (multi-threaded, no-cache)...')
        httpd.serve_forever()
