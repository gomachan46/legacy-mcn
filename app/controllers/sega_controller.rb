class SegaController < ApplicationController
  def get_session
    conn = Http::Client.new.connection('https://chunithm-net.com')
    resp = conn.post  do |req|
      req.url '/Login/SegaIdLoginApi'
      req.headers['Content-Type'] = 'application/json'
      req.body = ActiveSupport::JSON.encode({segaId: 'hoge', password: 'fuga'})
    end
    render json: ActiveSupport::JSON.decode(resp.body)['sessionIdList'].first
  end

  def login
    conn = Http::Client.new.connection('https://chunithm-net.com')
    resp = conn.post  do |req|
      req.url '/Login/SegaIdLoginApi'
      req.headers['Content-Type'] = 'application/json'
      req.body = ActiveSupport::JSON.encode({segaId: params['segaId'], password: params['password']})
    end
    render json: ActiveSupport::JSON.decode(resp.body)['sessionIdList'].first
  end
end
