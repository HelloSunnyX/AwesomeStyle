interface Navigation {
    navigate?: (routeName: string, params?: Object) => void;
    goBack?: (key?: string) => void;
    addListener?: (noti: 'willBlur' | 'willFocus' | 'didFocus' | 'didBlur', callback: () => void) => void;
    isFocused?: () => boolean;
    state?: { routeName: string, key: string, params: Object };
    setParams?: (params: Object) => void;
    getParam?: (key: string, fallback: any) => any;
    dispatch?: (action: any) => void;
    push?: (routeName: string, params?: Object) => void;
    pop?: (n?: number) => void;
    popToTop?: () => void;
    replace?: (routeName: string, params?: Object, action?: any) => void;
}

interface CommonProps {
    navigation?: Navigation;
}

export {
    CommonProps,
};

