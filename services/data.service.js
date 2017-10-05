  export const getDataService = async () => {
    const url = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF'
    const options = {
      mode: 'cors',
      method: 'GET'
    }
    const mainRequestService = async (url, options) => await fetch(url, options)
    const response = await mainRequestService(url, options)
    return response.status === 200
    ? await response.json()
    : 'error'
  }
