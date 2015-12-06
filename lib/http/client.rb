module Http
  HTTP_OK = 200
  HTTP_CREATED = 201
  HTTP_MOVED_PERMANENTLY = 301
  HTTP_FOUND = 302
  HTTP_SEE_OTHER = 303
  HTTP_BAD_REQUEST = 400
  HTTP_UNAUTHORIZED = 401
  HTTP_FORBIDDEN = 403
  HTTP_NOT_FOUND = 404
  HTTP_INTERNAL_SERVER_ERROR = 500

  DEFAULT_TIMEOUT      = 3
  DEFAULT_OPEN_TIMEOUT = 3

  class Client
    def connection(request_url)
      conn = Faraday.new(url: request_url, ssl: { verify: true }) do |faraday|
        faraday.use FaradayMiddleware::FollowRedirects
        faraday.adapter Faraday.default_adapter
      end
      conn.options.timeout      = DEFAULT_TIMEOUT
      conn.options.open_timeout = DEFAULT_OPEN_TIMEOUT
      conn
    end
  end
end
