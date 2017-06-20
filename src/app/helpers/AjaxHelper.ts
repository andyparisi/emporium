interface IAjax {
  headers?: any;
  body?: any;
  method?: any;
}

class Ajax {
  private config: IAjax = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${window.localStorage.getItem('token') || ''}`
    }
  };

  public get(url: string, config?: IAjax): Promise<Response> {
    this.config.method = 'GET';
    return this.fetch(url, config);
  }

  public post(url: string, config?: IAjax): Promise<Response> {
    this.config.method = 'POST';
    return this.fetch(url, config);
  }

  public delete(url: string, config?: IAjax): Promise<Response> {
    this.config.method = 'DELETE';
    return this.fetch(url, config);
  }

  public put(url: string, config?: IAjax): Promise<Response> {
    this.config.method = 'PUT';
    return this.fetch(url, config);
  }

  protected fetch(url: string, config?: IAjax): Promise<Response> {
    this.config = Object.assign(this.config, config);
    return fetch(url, this.config);
  }
}

export default new Ajax();
