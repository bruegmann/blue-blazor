namespace DocGen.Models;

public class ComponentParameterInfo
{
    public string? Name { get; set; }
    public string? ParameterType { get; set; }
    public object? DefaultValue { get; set; }
    public string? Comment { get; set; }
    public bool CascadingParameter { get; set; }
}