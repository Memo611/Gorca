using System.ComponentModel.DataAnnotations;

namespace API.Entidades;

public class Clientes
{
    [Key]
    public int ID_Cli { get; set; }
    public string RFC_Cli { get; set; }
    public string Razon_Social_Cli { get; set; }
    public string Regimen_Fiscal_Cli { get; set; }
    public string Uso_CFDI_Cli { get; set; }
    public string Calle_Cli { get; set; }
    public int Numero_Cli { get; set; }
    public string Colonia_Cli { get; set; }
    public string Ciudad_Cli { get; set; }
    public int CP_Cli { get; set; }
    public string Pais_Cli { get; set; }
    
    public bool Habilitado { get; set; }
}