export const getBreadcrumbItem = (routes, pathname) => {
    let result;
    if (Array.isArray(routes)) {
        result = routes.find(
            (route) =>
                route.key === pathname ||
                getBreadcrumbItem(route.children, pathname)
        );
    }
    return result;
};

export const getBreadcrumbList = (result, routes, pathname) => {
    if (Array.isArray(routes)) {
        routes.forEach((route) => {
            const resultItem = {
                path: route.path,
                label: route.label,
                key: route.key,
                clickable: route.clickable,
            };
            result.push(resultItem);
            if (route.key !== pathname) {
                getBreadcrumbList(
                    result,
                    getBreadcrumbItem(route.children, pathname)
                        ? [getBreadcrumbItem(route.children, pathname)]
                        : [],
                    pathname
                );
            }
        });
    }
    return result;
};
