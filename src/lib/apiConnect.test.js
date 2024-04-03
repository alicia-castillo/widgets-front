import axios from 'axios'

import { fetchAllWidgets, addNewWidget, DeleteWidget, editWidget } from './apiConnect'

jest.mock('axios')

describe('fetchAllWidgets', () => {
  it('returns response data', async () => {
    const widgetList = [{ description: 'Keeps a diary',  name: 'Widget Jones', price: 9.95 }]
    axios.get = jest.fn().mockResolvedValueOnce({ data: widgetList })

    const result = await fetchAllWidgets()

    expect(result).toEqual(widgetList)
  })

  it('errors on reject', async () => {
    axios.get = jest.fn().mockRejectedValueOnce({})

    expect(fetchAllWidgets()).rejects.toBeTruthy()
  })
})

describe('addNewWidget', ()=>{
  it('returns new widget', async ()=>{
    const widget = {name: 'Jonas', description: 'brothers', price: 100.00}
    axios.post = jest.fn(widget).mockResolvedValueOnce({data:widget})
    const resp = await addNewWidget(widget);
    expect(resp).toEqual(widget);
  });

  it('addWidget on reject', async () => {
    const widget = {name: 'Jonas', description: 'brothers', price: 100.00}
    axios.post = jest.fn(widget).mockRejectedValueOnce({})

    expect(addNewWidget(widget)).rejects.toBeTruthy()
  })
});

/*describe('deleteWidget', ()=>{
  it('returns response', async ()=>{
    const widgetName = "test1";
    axios.delete = jest.fn(widgetName).mockResolvedValueOnce({})
    const resp = await DeleteWidget(widgetName);
    expect(resp).toEqual(widgetName);
  });
});*/

describe('editWidget', ()=>{
  it('returns widget edited', async ()=>{
    const widgetName = "widget2";
    const widget = {name: 'Jonas', description: 'brothers', price: 100.00}
    axios.put = jest.fn(widgetName).mockResolvedValueOnce({data: widget})
    const resp = await editWidget(widgetName);
    expect(resp).toEqual(widget);
  });
});
