// Entity mappings for BambuLab (ha-bambulab) — Italian
// Matches Italian entity IDs exposed by the official Bambu Lab integration.
export default {
  sensor: [
    ["status", ["stato_di_stampa", "current_print_state"]],
    ["printer_state", ["stato_di_stampa", "printer_state"]],
    ["progress", ["progressi_di_stampa", "progress"]],
    ["eta", ["tempo_rimanente", "print_time_left", "print_eta"]],
    ["filename", ["nome_del_file_gcode", "filename"]],
    ["current_layer", ["strato_corrente", "current_layer"]],
    ["total_layers", ["livelli_totali", "total_layer", "total_layers"]],
    ["filament_used", ["grammatura_stampa", "filament_used"]],
    ["current_print_message", ["fase_corrente", "current_print_message"]],
    ["hotend", ["temperatura_ugello", "extruder_temperature", "extruder_temp"]],
    ["bed", ["temperatura_piatto", "bed_temperature", "bed_temp"]]
  ],
  number: [
    ["hotend_target", ["temperatura_target_ugello", "extruder_target"]],
    ["bed_target", ["temperatura_target_piatto", "bed_target"]]
  ],
  button: [
    ["cancel", ["interrompi_stampa", "cancel_print"]],
    ["pause", ["sospendi_stampa", "pause_print"]],
    ["resume", ["riprendi_stampa", "resume_print"]]
  ],
  camera: [["thumbnail", ["thumbnail"]]],
  ui: {
    eta: "Tempo rimanente",
    elapsed: "Tempo trascorso",
    file: "File",
    progress: "Avanzamento",
    hotend: "Ugello",
    bed: "Piatto",
    speed: "Velocità",
    flow: "Flusso",
    pause: "Sospendi",
    resume: "Riprendi",
    cancel: "Interrompi",
    macros: "Macro",
    move: "Movimento",
    misc: "Varie",
    more: "Altro",
    movement: "Movimento",
    system: "Sistema",
    temperatures: "Temperature",
    fans_outputs: "Ventole e uscite",
    klipper_control: "Controllo Klipper",
    service_control: "Controllo servizi",
    host_control: "Controllo host",
    restart_klipper: "Riavvia Klipper",
    firmware_restart: "Riavvia firmware",
    server_restart: "Riavvia server",
    host_restart: "Riavvia host",
    host_shutdown: "Arresta host",
    reboot_host: "Riavvia host",
    shutdown_host: "Arresta host",
    cameras: "Telecamere",
    camera_fallback: "Camera",
    home_all: "Tutti"
  }
};
