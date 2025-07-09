using BlueBlazor.Services;
using Microsoft.Extensions.DependencyInjection;

public static class CollectionExtensions
{
    public static IServiceCollection AddBlueBlazor(this IServiceCollection services, Action<Options>? configure = null)
    {
        services.AddLocalization();

        if (configure != null)
            services.Configure(configure);
        else
            services.Configure<Options>(_ => { });

        services.AddScoped<DialogService>();
        return services;
    }
}
