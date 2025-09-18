# Contributing

## Publish new release automation

When the version in "BlueBlazor/BlueBlazor.csproj" get changed inside the master branch, GitHub Actions will create a new GitHub release and tag and will generate a changelog to it. After that a new NuGet package will be created and pushed to NuGet.org.

## Deploy docs

The docs have to be deployed separately. Just use the "Publish" feature inside Visual Studio on the `BlueBlazor.Docs` project.
