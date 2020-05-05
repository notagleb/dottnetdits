export abstract class TimeProvider {
    private static current: TimeProvider;

    constructor () {
        TimeProvider.current = new DefaultTimeProvider();
    }

    public static get Current(): TimeProvider {
        return TimeProvider.current;
    }

    public static set Current(value) {
        TimeProvider.current = value;
    }

    public abstract get UtcNow(): string;

    public static ResetToDefault(): void {
        TimeProvider.current = new DefaultTimeProvider();
    }
}

class DefaultTimeProvider {
    public get UtcNow(): string {
        return Date.now().toString();
    }
}