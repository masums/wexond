import store from '../store';

export const loadURL = (url: string) => {
  const tab = store.tabs.selectedTab;

  if (!tab) {
    store.tabs.addTab({ url, active: true });
  } else {
    tab.url = url;
    tab.callViewMethod('webContents.loadURL', url);
  }

  store.overlay.visible = false;
};
