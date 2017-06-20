class Ajax {
  private prefix: string = '/api/';
  private config: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${window.localStorage.getItem('token') || ''}`
    }
  };

  public get(url: string, config?: RequestInit): Promise<Response> {
    this.config.method = 'GET';
    return this.fetch(url, config);
  }

  public post(url: string, config?: RequestInit): Promise<Response> {
    this.config.method = 'POST';
    return this.fetch(url, config);
  }

  public delete(url: string, config?: RequestInit): Promise<Response> {
    this.config.method = 'DELETE';
    return this.fetch(url, config);
  }

  public put(url: string, config?: RequestInit): Promise<Response> {
    this.config.method = 'PUT';
    return this.fetch(url, config);
  }

  public fetch(url: string, config?: RequestInit): Promise<Response> {
    this.config = Object.assign(this.config, config);
    return fetch(`${this.prefix}${url}`, this.config);
  }
}

export default new Ajax();
