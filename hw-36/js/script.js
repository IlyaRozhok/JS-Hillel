(function () {
    const cache = new Map();

    const caching = {
        cache: new Map(),
        index: 0,

        plus(a, b) {
            return a + b
        },
        div(a, b) {
            return a / b
        },

        cacheAbility(func, ...args) {
            const result = func(...args);
            ++this.index;
            if (cache.has(result)) new Error('Same parameters')
            cache.set(result, this.index);
            if (cache.size > 10) {
                const firstKey = Array.from(cache.keys())[0];
                cache.delete(firstKey)
            }
            return cache
        }
    }
})();
