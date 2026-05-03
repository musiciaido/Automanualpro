const translations = {
  es: {
    pageTitle: "AutoManual Pro | Facturacion para mecanicos independientes",
    navInvoice: "Factura",
    navSetup: "Configuracion",
    navHistory: "Historial",
    navRecords: "Registros",
    navFeatures: "Funciones",
    navPlans: "Planes",
    languageLabel: "Idioma",
    menuButton: "Menu",
    hideHero: "Ocultar imagen",
    showHero: "Mostrar imagen",
    topAction: "Crear factura",
    heroEyebrow: "Facturacion para mecanicos independientes",
    heroCopy: "Crea facturas, guarda clientes, registra vehiculos y controla pagos pendientes desde una pantalla simple.",
    heroPrimary: "Empezar factura",
    heroSecondary: "Ver funciones",
    invoiceEyebrow: "Nueva factura",
    invoiceTitle: "Trabajo del taller",
    invoiceNumberField: "Numero de factura",
    customerLabel: "Cliente",
    phoneLabel: "Telefono",
    vehicleLabel: "Vehiculo",
    vinLabel: "VIN",
    vinPlaceholder: "17 caracteres",
    plateLabel: "Placa",
    lookupVin: "Buscar",
    vinTooShort: "Escribe un VIN valido de 17 caracteres.",
    vinLookupError: "No se pudo consultar el VIN. Revisa el numero o intenta de nuevo.",
    vinNoResults: "No se encontraron datos para ese VIN.",
    vinLookupSuccess: "Datos del vehiculo agregados desde el VIN.",
    tableDescription: "Descripcion",
    tableQuantity: "Cantidad",
    tablePrice: "Precio",
    tableTotal: "Total",
    addService: "Agregar servicio",
    addPart: "Agregar pieza",
    notesLabel: "Notas del trabajo",
    summaryEyebrow: "Resumen",
    subtotalLabel: "Subtotal",
    taxLabel: "Impuesto",
    totalLabel: "Total",
    invoiceDate: "Fecha",
    billTo: "Cliente",
    vehicleInfo: "Vehiculo",
    shopInfo: "Taller",
    itemLabel: "Trabajo / pieza",
    typeLabel: "Tipo",
    termsText:
      "Autorizo el trabajo de reparacion descrito arriba junto con los materiales necesarios. El taller puede operar el vehiculo para pruebas, inspeccion o entrega. Las estimaciones son validas por 30 dias.",
    signatureLabel: "Firma del cliente",
    mileageLabel: "Millaje",
    mileageInLabel: "Millas entrada",
    mileageOutLabel: "Millas salida",
    serviceWriterLabel: "Asesor",
    notesLabelPrint: "Notas",
    paymentLabel: "Estado de pago",
    statusPending: "Pendiente",
    statusPaid: "Pagado",
    statusPartial: "Pago parcial",
    saveInvoice: "Guardar factura",
    updateInvoice: "Actualizar factura",
    duplicateFull: "Duplicar completa",
    duplicateBasic: "Duplicar básica",
    linkDuplicate: "Conectar duplicado con original",
    invoiceUpdated: "Factura actualizada.",
    invoiceLocked: "Esta factura ya esta pagada y no se puede editar.",
    invoiceDuplicated: "Factura duplicada con numero nuevo.",
    linkedInvoice: "Conectada a",
    printInvoice: "Imprimir",
    invoiceWord: "Factura",
    fallbackCustomer: "Cliente",
    fallbackPhone: "Sin telefono",
    fallbackVehicle: "Vehiculo",
    fallbackVin: "Sin VIN",
    fallbackPlate: "Sin placa",
    saveMessage: "Factura guardada. Total:",
    invoiceRequired: "Agrega al menos cliente, vehiculo y una linea de servicio o pieza.",
    invoiceSavedOpen: "Factura abierta para revisar o imprimir.",
    invoiceNumberLabel: "Factura",
    useRecord: "Usar en factura",
    openInvoice: "Abrir factura",
    exportData: "Exportar respaldo",
    exportDone: "Respaldo exportado.",
    recordsEyebrow: "Clientes y vehiculos",
    recordsTitle: "Busqueda rapida",
    recordSearchPlaceholder: "Buscar cliente, telefono, vehiculo, VIN o placa",
    customersTitle: "Clientes",
    vehiclesTitle: "Vehiculos",
    emptyCustomers: "Todavia no hay clientes guardados.",
    emptyVehicles: "Todavia no hay vehiculos guardados.",
    linkedCustomer: "Cliente asociado",
    deleteLine: "Eliminar linea",
    newService: "Nuevo servicio",
    newPart: "Nueva pieza",
    setupEyebrow: "Configuracion inicial",
    setupTitle: "Datos del taller",
    setupCopy: "Estos datos se llenan una sola vez antes de crear facturas. Despues puedes volver aqui para editarlos.",
    setupBadge: "Se guarda en este navegador",
    shopNameLabel: "Nombre del taller",
    shopPhoneLabel: "Telefono del taller",
    shopAddressLabel: "Direccion",
    shopEmailLabel: "Email",
    shopTaxLabel: "Impuesto por defecto (%)",
    shopLogoLabel: "Logo del taller (PNG)",
    shopNamePlaceholder: "Ej. Taller Ramirez",
    shopPhonePlaceholder: "Ej. (555) 000-0000",
    shopAddressPlaceholder: "Ej. 123 Main St, Los Angeles, CA",
    shopEmailPlaceholder: "Ej. taller@email.com",
    shopTaxPlaceholder: "Ej. 8.25",
    saveShop: "Guardar datos del taller",
    clearShop: "Limpiar datos",
    logoPlaceholder: "Logo PNG",
    shopNotConfigured: "Datos del taller sin configurar",
    shopConfigHint: "Llena la forma de arriba para mostrar aqui el nombre, telefono, direccion y logo.",
    shopSaved: "Datos del taller guardados.",
    shopCleared: "Datos del taller limpiados.",
    shopRequired: "Completa todos los datos del taller antes de crear facturas.",
    setupRequiredEyebrow: "Configuracion requerida",
    setupRequiredTitle: "Primero completa los datos del taller",
    setupRequiredCopy: "Para crear facturas, el taller debe guardar su informacion una sola vez en Configuracion.",
    goToSetup: "Ir a configuracion",
    logoPngOnly: "El logo debe ser un archivo PNG.",
    emptyHistory: "Todavia no hay facturas guardadas.",
    historyEyebrow: "Historial rapido",
    historyTitle: "Facturas recientes",
    localDemo: "Demo local",
    featuresEyebrow: "Primera version",
    featuresTitle: "Funciones esenciales para iniciar",
    featureOneTitle: "Clientes y vehiculos",
    featureOneCopy: "Registra nombre, telefono, vehiculo, placa o VIN para cada trabajo.",
    featureTwoTitle: "Servicios y piezas",
    featureTwoCopy: "Agrega mano de obra, repuestos, cantidades y precios en una misma factura.",
    featureThreeTitle: "Totales automaticos",
    featureThreeCopy: "Calcula subtotal, impuesto, total y estado de pago sin hojas complicadas.",
    featureFourTitle: "Historial del taller",
    featureFourCopy: "Consulta trabajos recientes y detecta facturas pagadas o pendientes.",
    plansEyebrow: "Modelo de negocio",
    plansTitle: "Planes posibles para venderlo despues",
    planOneTitle: "Individual",
    perMonth: "/mes",
    planOneItemOne: "Facturas ilimitadas",
    planOneItemTwo: "Clientes y vehiculos",
    planOneItemThree: "Impresion basica",
    planTwoItemOne: "Historial por vehiculo",
    planTwoItemTwo: "Pagos pendientes",
    planTwoItemThree: "Reportes mensuales",
    planThreeTitle: "Negocio",
    planThreeItemOne: "Varios usuarios",
    planThreeItemTwo: "Inventario de piezas",
    planThreeItemThree: "Logo del taller",
    footerCopy: "Primera version de sistema de facturacion para mecanicos independientes.",
    oilChange: "Cambio de aceite y filtro",
    airFilter: "Filtro de aire",
    inspection: "Revision general",
    notes: "Cambio de aceite, revision general y reemplazo de filtro de aire.",
  },
  en: {
    pageTitle: "AutoManual Pro | Invoicing for independent mechanics",
    navInvoice: "Invoice",
    navSetup: "Settings",
    navHistory: "History",
    navRecords: "Records",
    navFeatures: "Features",
    navPlans: "Plans",
    languageLabel: "Language",
    menuButton: "Menu",
    hideHero: "Hide image",
    showHero: "Show image",
    topAction: "Create invoice",
    heroEyebrow: "Invoicing for independent mechanics",
    heroCopy: "Create invoices, save customers, register vehicles, and track pending payments from one simple screen.",
    heroPrimary: "Start invoice",
    heroSecondary: "View features",
    invoiceEyebrow: "New invoice",
    invoiceTitle: "Shop job",
    invoiceNumberField: "Invoice number",
    customerLabel: "Customer",
    phoneLabel: "Phone",
    vehicleLabel: "Vehicle",
    vinLabel: "VIN",
    vinPlaceholder: "17 characters",
    plateLabel: "Plate",
    lookupVin: "Lookup",
    vinTooShort: "Enter a valid 17-character VIN.",
    vinLookupError: "The VIN could not be decoded. Check the number or try again.",
    vinNoResults: "No vehicle data was found for that VIN.",
    vinLookupSuccess: "Vehicle details added from the VIN.",
    tableDescription: "Description",
    tableQuantity: "Qty",
    tablePrice: "Price",
    tableTotal: "Total",
    addService: "Add service",
    addPart: "Add part",
    notesLabel: "Job notes",
    summaryEyebrow: "Summary",
    subtotalLabel: "Subtotal",
    taxLabel: "Tax",
    totalLabel: "Total",
    invoiceDate: "Date",
    billTo: "Customer",
    vehicleInfo: "Vehicle",
    shopInfo: "Shop",
    itemLabel: "Job / part",
    typeLabel: "Type",
    termsText:
      "I hereby authorize the repair work described above along with necessary materials. The shop may operate the vehicle for testing, inspection, or delivery. Estimates are valid for 30 days.",
    signatureLabel: "Customer Signature",
    mileageLabel: "Mileage",
    mileageInLabel: "Mileage in",
    mileageOutLabel: "Mileage out",
    serviceWriterLabel: "Service Writer",
    notesLabelPrint: "Notes",
    paymentLabel: "Payment status",
    statusPending: "Pending",
    statusPaid: "Paid",
    statusPartial: "Partial payment",
    saveInvoice: "Save invoice",
    updateInvoice: "Update invoice",
    duplicateFull: "Duplicate full",
    duplicateBasic: "Duplicate basic",
    linkDuplicate: "Connect duplicate to original",
    invoiceUpdated: "Invoice updated.",
    invoiceLocked: "This invoice is already paid and cannot be edited.",
    invoiceDuplicated: "Invoice duplicated with a new number.",
    linkedInvoice: "Linked to",
    printInvoice: "Print",
    invoiceWord: "Invoice",
    fallbackCustomer: "Customer",
    fallbackPhone: "No phone",
    fallbackVehicle: "Vehicle",
    fallbackVin: "No VIN",
    fallbackPlate: "No plate",
    saveMessage: "Invoice saved. Total:",
    invoiceRequired: "Add at least a customer, vehicle, and one service or part line.",
    invoiceSavedOpen: "Invoice opened for review or printing.",
    invoiceNumberLabel: "Invoice",
    useRecord: "Use in invoice",
    openInvoice: "Open invoice",
    exportData: "Export backup",
    exportDone: "Backup exported.",
    recordsEyebrow: "Customers and vehicles",
    recordsTitle: "Quick search",
    recordSearchPlaceholder: "Search customer, phone, vehicle, VIN, or plate",
    customersTitle: "Customers",
    vehiclesTitle: "Vehicles",
    emptyCustomers: "No customers saved yet.",
    emptyVehicles: "No vehicles saved yet.",
    linkedCustomer: "Linked customer",
    deleteLine: "Delete line",
    newService: "New service",
    newPart: "New part",
    setupEyebrow: "Initial setup",
    setupTitle: "Shop details",
    setupCopy: "These details are filled in once before creating invoices. You can come back here later to edit them.",
    setupBadge: "Saved in this browser",
    shopNameLabel: "Shop name",
    shopPhoneLabel: "Shop phone",
    shopAddressLabel: "Address",
    shopEmailLabel: "Email",
    shopTaxLabel: "Default tax (%)",
    shopLogoLabel: "Shop logo (PNG)",
    shopNamePlaceholder: "Ex. Ramirez Auto Repair",
    shopPhonePlaceholder: "Ex. (555) 000-0000",
    shopAddressPlaceholder: "Ex. 123 Main St, Los Angeles, CA",
    shopEmailPlaceholder: "Ex. shop@email.com",
    shopTaxPlaceholder: "Ex. 8.25",
    saveShop: "Save shop details",
    clearShop: "Clear details",
    logoPlaceholder: "PNG logo",
    shopNotConfigured: "Shop details not configured",
    shopConfigHint: "Fill out the form above to show the name, phone, address, and logo here.",
    shopSaved: "Shop details saved.",
    shopCleared: "Shop details cleared.",
    shopRequired: "Complete all shop details before creating invoices.",
    setupRequiredEyebrow: "Setup required",
    setupRequiredTitle: "Complete the shop details first",
    setupRequiredCopy: "To create invoices, the shop must save its information once in Settings.",
    goToSetup: "Go to settings",
    logoPngOnly: "The logo must be a PNG file.",
    emptyHistory: "No invoices saved yet.",
    historyEyebrow: "Quick history",
    historyTitle: "Recent invoices",
    localDemo: "Local demo",
    featuresEyebrow: "First version",
    featuresTitle: "Essential features to start",
    featureOneTitle: "Customers and vehicles",
    featureOneCopy: "Register name, phone, vehicle, plate or VIN for each job.",
    featureTwoTitle: "Services and parts",
    featureTwoCopy: "Add labor, replacement parts, quantities, and prices in the same invoice.",
    featureThreeTitle: "Automatic totals",
    featureThreeCopy: "Calculate subtotal, tax, total, and payment status without complicated spreadsheets.",
    featureFourTitle: "Shop history",
    featureFourCopy: "Review recent jobs and identify paid or pending invoices.",
    plansEyebrow: "Business model",
    plansTitle: "Possible plans to sell it later",
    planOneTitle: "Individual",
    perMonth: "/mo",
    planOneItemOne: "Unlimited invoices",
    planOneItemTwo: "Customers and vehicles",
    planOneItemThree: "Basic printing",
    planTwoItemOne: "Vehicle history",
    planTwoItemTwo: "Pending payments",
    planTwoItemThree: "Monthly reports",
    planThreeTitle: "Business",
    planThreeItemOne: "Multiple users",
    planThreeItemTwo: "Parts inventory",
    planThreeItemThree: "Shop logo",
    footerCopy: "First version of an invoicing system for independent mechanics.",
    oilChange: "Oil and filter change",
    airFilter: "Air filter",
    inspection: "General inspection",
    notes: "Oil change, general inspection, and air filter replacement.",
  },
};

let currentLanguage = "es";

const initialItems = [];
const savedInvoices = [];
const savedCustomers = [];
const savedVehicles = [];
let shopData = {
  name: "",
  phone: "",
  address: "",
  email: "",
  tax: "",
  logo: "",
};
let invoiceSequence = 1000;
let currentInvoiceNumberReserved = false;

const invoiceItems = document.querySelector("#invoiceItems");
const subtotalValue = document.querySelector("#subtotalValue");
const totalValue = document.querySelector("#totalValue");
const taxRate = document.querySelector("#taxRate");
const paymentStatus = document.querySelector("#paymentStatus");
const invoiceStatusLabel = document.querySelector("#invoiceStatusLabel");
const invoicePreview = document.querySelector("#invoicePreview");
const historyGrid = document.querySelector("#historyGrid");
const languageSelect = document.querySelector("#languageSelect");
const invoiceNotes = document.querySelector("#invoiceNotes");
const shopName = document.querySelector("#shopName");
const shopPhone = document.querySelector("#shopPhone");
const shopAddress = document.querySelector("#shopAddress");
const shopEmail = document.querySelector("#shopEmail");
const shopTax = document.querySelector("#shopTax");
const shopLogo = document.querySelector("#shopLogo");
const shopDetails = document.querySelector("#shopDetails");
const shopLogoBox = document.querySelector("#shopLogoBox");
const workspace = document.querySelector("#factura");
const setupSection = document.querySelector("#configuracion");
const createInvoiceLink = document.querySelector("#createInvoiceLink");
const setupNavLink = document.querySelector('a[href="#configuracion"]');
const heroCreateInvoiceLink = document.querySelector('[data-i18n="heroPrimary"]');
const customersList = document.querySelector("#customersList");
const vehiclesList = document.querySelector("#vehiclesList");
const recordSearchInput = document.querySelector("#recordSearchInput");
const printInvoiceSheet = document.querySelector("#printInvoiceSheet");
const invoiceNumberInput = document.querySelector("#invoiceNumber");
const mileageInInput = document.querySelector("#mileageIn");
const mileageOutInput = document.querySelector("#mileageOut");
const toggleHeroButton = document.querySelector("#toggleHero");
const headerMenu = document.querySelector(".header-menu");
const menuButton = document.querySelector("#menuButton");
const saveInvoiceButton = document.querySelector("#saveInvoice");
const updateInvoiceButton = document.querySelector("#updateInvoice");
const duplicateFullButton = document.querySelector("#duplicateFull");
const duplicateBasicButton = document.querySelector("#duplicateBasic");
const linkDuplicateInput = document.querySelector("#linkDuplicate");
let setupEditorOpen = false;
let editingInvoiceId = null;

function t(key) {
  return translations[currentLanguage][key] || translations.es[key] || key;
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadShopData() {
  const saved = localStorage.getItem("automanual-shop");

  if (saved) {
    try {
      shopData = { ...shopData, ...JSON.parse(saved) };
    } catch {
      localStorage.removeItem("automanual-shop");
    }
  }

  shopName.value = shopData.name;
  shopPhone.value = shopData.phone;
  shopAddress.value = shopData.address;
  shopEmail.value = shopData.email;
  shopTax.value = shopData.tax;

  if (shopData.tax !== "") {
    taxRate.value = shopData.tax;
  }
}

function loadRecords() {
  loadCollection("automanual-invoices", savedInvoices);
  loadCollection("automanual-customers", savedCustomers);
  loadCollection("automanual-vehicles", savedVehicles);
  invoiceSequence = Number(localStorage.getItem("automanual-invoice-sequence") || "1000");
  syncInvoiceSequence();
}

function loadCollection(key, target) {
  const saved = localStorage.getItem(key);

  if (!saved) {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      target.splice(0, target.length, ...parsed);
    }
  } catch {
    localStorage.removeItem(key);
  }
}

function saveRecords() {
  localStorage.setItem("automanual-invoices", JSON.stringify(savedInvoices));
  localStorage.setItem("automanual-customers", JSON.stringify(savedCustomers));
  localStorage.setItem("automanual-vehicles", JSON.stringify(savedVehicles));
  localStorage.setItem("automanual-invoice-sequence", String(invoiceSequence));
}

function applyHeroPreference() {
  const hidden = localStorage.getItem("automanual-hide-hero") === "true";
  document.body.classList.toggle("hero-hidden", hidden);
  toggleHeroButton.textContent = hidden ? t("showHero") : t("hideHero");
}

function toggleHero() {
  const hidden = !document.body.classList.contains("hero-hidden");
  localStorage.setItem("automanual-hide-hero", String(hidden));
  applyHeroPreference();
}

function toggleMenu() {
  const isOpen = headerMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

function closeMenu() {
  headerMenu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function isShopConfigured() {
  return Boolean(shopData.name && shopData.phone && shopData.address && shopData.email && shopData.tax !== "");
}

function updateSetupGate() {
  const configured = isShopConfigured();
  workspace.classList.toggle("is-locked", !configured);
  setupSection.classList.toggle("is-hidden", configured && !setupEditorOpen);
  createInvoiceLink.href = configured ? "#factura" : "#configuracion";
  return configured;
}

function requireShopSetup() {
  if (isShopConfigured()) {
    return true;
  }

  updateSetupGate();
  setupEditorOpen = true;
  setupSection.classList.remove("is-hidden");
  setupSection.scrollIntoView({ behavior: "smooth", block: "start" });
  alert(t("shopRequired"));
  return false;
}

function getInvoiceInputs() {
  return [
    document.querySelector("#customerName"),
    document.querySelector("#customerPhone"),
    document.querySelector("#vehicleName"),
    document.querySelector("#vehicleVin"),
    document.querySelector("#vehiclePlate"),
    mileageInInput,
    mileageOutInput,
    taxRate,
    paymentStatus,
    invoiceNotes,
    document.querySelector("#addService"),
    document.querySelector("#addPart"),
    document.querySelector("#lookupVin"),
  ];
}

function setInvoiceLocked(locked) {
  getInvoiceInputs().forEach((element) => {
    element.disabled = locked;
  });

  invoiceItems.querySelectorAll("input, select, button").forEach((element) => {
    element.disabled = locked;
  });
}

function isEditingPaidInvoice() {
  const invoice = savedInvoices.find((item) => item.id === editingInvoiceId);
  return Boolean(invoice && invoice.status === "pagado");
}

function updateInvoiceMode() {
  const editing = Boolean(editingInvoiceId);
  const locked = isEditingPaidInvoice();

  saveInvoiceButton.style.display = editing ? "none" : "";
  updateInvoiceButton.style.display = editing && !locked ? "" : "none";
  duplicateFullButton.style.display = editing ? "" : "none";
  duplicateBasicButton.style.display = editing ? "" : "none";
  linkDuplicateInput.closest("label").style.display = editing ? "" : "none";
  setInvoiceLocked(locked);
}

function saveShopData() {
  if (!document.querySelector("#shopForm").reportValidity()) {
    return;
  }

  shopData = {
    ...shopData,
    name: shopName.value.trim(),
    phone: shopPhone.value.trim(),
    address: shopAddress.value.trim(),
    email: shopEmail.value.trim(),
    tax: shopTax.value.trim(),
  };

  localStorage.setItem("automanual-shop", JSON.stringify(shopData));

  if (shopData.tax !== "") {
    taxRate.value = shopData.tax;
  }

  renderShopDetails();
  setupEditorOpen = false;
  updateSetupGate();
  calculateTotals();
  alert(t("shopSaved"));
  document.querySelector("#factura").scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearShopData() {
  shopData = {
    name: "",
    phone: "",
    address: "",
    email: "",
    tax: "",
    logo: "",
  };

  localStorage.removeItem("automanual-shop");
  shopName.value = "";
  shopPhone.value = "";
  shopAddress.value = "";
  shopEmail.value = "";
  shopTax.value = "";
  shopLogo.value = "";
  taxRate.value = "";
  renderShopDetails();
  setupEditorOpen = true;
  updateSetupGate();
  calculateTotals();
  alert(t("shopCleared"));
}

function renderShopDetails() {
  if (!shopData.name && !shopData.phone && !shopData.address && !shopData.email) {
    shopDetails.innerHTML = `
      <h3>${t("shopNotConfigured")}</h3>
      <p>${t("shopConfigHint")}</p>
    `;
  } else {
    shopDetails.innerHTML = `
      <h3>${escapeHtml(shopData.name || t("shopNotConfigured"))}</h3>
      ${shopData.phone ? `<p>${escapeHtml(shopData.phone)}</p>` : ""}
      ${shopData.address ? `<p>${escapeHtml(shopData.address)}</p>` : ""}
      ${shopData.email ? `<p>${escapeHtml(shopData.email)}</p>` : ""}
    `;
  }

  shopLogoBox.innerHTML = shopData.logo
    ? `<img src="${shopData.logo}" alt="${t("shopLogoLabel")}" />`
    : `<span>${t("logoPlaceholder")}</span>`;
}

function renderItems() {
  invoiceItems.innerHTML = initialItems
    .map(
      (item, index) => {
        const lineType = item.type || "part";
        return `
        <tr>
          <td>
            <input data-field="description" data-index="${index}" type="text" value="${escapeHtml(item.description)}" />
          </td>
          <td>
            <select data-field="type" data-index="${index}">
              <option value="part"${lineType === "part" ? " selected" : ""}>Part</option>
              <option value="labor"${lineType === "labor" ? " selected" : ""}>Labor</option>
            </select>
          </td>
          <td>
            <input data-field="quantity" data-index="${index}" type="number" min="0" step="1" value="${item.quantity}" />
          </td>
          <td>
            <input data-field="price" data-index="${index}" type="number" min="0" step="0.01" value="${item.price}" />
          </td>
          <td class="line-total">${money(item.quantity * item.price)}</td>
          <td>
            <button class="icon-button" data-remove="${index}" type="button" aria-label="${t("deleteLine")}">X</button>
          </td>
        </tr>
      `;
      }
    )
    .join("");
  updateInvoiceMode();
}

function calculateTotals() {
  const subtotal = initialItems.reduce((sum, item) => sum + Number(item.quantity) * Number(item.price), 0);
  const tax = subtotal * (Number(taxRate.value) / 100);
  const total = subtotal + tax;

  subtotalValue.textContent = money(subtotal);
  totalValue.textContent = money(total);
  invoiceStatusLabel.textContent = paymentStatus.options[paymentStatus.selectedIndex].text;
  invoiceStatusLabel.dataset.status = paymentStatus.value;

  renderPreview(total);
  renderPrintInvoice();
}

function getTotals() {
  const subtotal = initialItems.reduce((sum, item) => sum + Number(item.quantity) * Number(item.price), 0);
  const parts = initialItems.reduce(
    (sum, item) => (item.type === "labor" ? sum : sum + Number(item.quantity) * Number(item.price)),
    0
  );
  const labor = initialItems.reduce(
    (sum, item) => (item.type === "labor" ? sum + Number(item.quantity) * Number(item.price) : sum),
    0
  );
  const tax = subtotal * (Number(taxRate.value) / 100);
  return {
    parts,
    labor,
    subtotal,
    tax,
    total: subtotal + tax,
  };
}

function updateLineTotal(input) {
  const index = Number(input.dataset.index);
  const row = input.closest("tr");
  const totalCell = row.querySelector(".line-total");

  totalCell.textContent = money(Number(initialItems[index].quantity) * Number(initialItems[index].price));
}

function renderPreview(total) {
  const invoiceNumber = invoiceNumberInput.value || nextInvoiceNumber();
  const customer = document.querySelector("#customerName").value || t("fallbackCustomer");
  const phone = document.querySelector("#customerPhone").value || t("fallbackPhone");
  const vehicle = document.querySelector("#vehicleName").value || t("fallbackVehicle");
  const vehicleVin = document.querySelector("#vehicleVin").value || t("fallbackVin");
  const vehiclePlate = document.querySelector("#vehiclePlate").value || t("fallbackPlate");

  invoicePreview.innerHTML = `
    <h3>${t("invoiceWord")} ${escapeHtml(invoiceNumber)}</h3>
    ${
      invoicePreview.dataset.parentInvoiceNumber
        ? `<p><strong>${escapeHtml(t("linkedInvoice"))}:</strong> ${escapeHtml(invoicePreview.dataset.parentInvoiceNumber)}</p>`
        : ""
    }
    <p><strong>${escapeHtml(customer)}</strong><br />${escapeHtml(phone)}</p>
    <p>${escapeHtml(vehicle)}<br />VIN: ${escapeHtml(vehicleVin)}<br />${escapeHtml(t("plateLabel"))}: ${escapeHtml(vehiclePlate)}</p>
    <p class="preview-total">${money(total)}</p>
  `;
}

function renderPrintInvoice() {
  const totals = getTotals();
  const invoiceNumber = invoiceNumberInput.value || nextInvoiceNumber();
  const customer = document.querySelector("#customerName").value || t("fallbackCustomer");
  const phone = document.querySelector("#customerPhone").value || t("fallbackPhone");
  const vehicle = document.querySelector("#vehicleName").value || t("fallbackVehicle");
  const vin = document.querySelector("#vehicleVin").value || t("fallbackVin");
  const plate = document.querySelector("#vehiclePlate").value || t("fallbackPlate");
  const mileageIn = mileageInInput.value || "0";
  const mileageOut = mileageOutInput.value || "0";
  const notes = invoiceNotes.value.trim();
  const date = new Intl.DateTimeFormat(currentLanguage === "es" ? "es-US" : "en-US").format(new Date());
  const rows = initialItems.length
    ? initialItems
        .map(
          (item) => `
            <tr>
              <td>${escapeHtml((item.type || "part") === "labor" ? "Labor" : "Part")}</td>
              <td>${escapeHtml(item.description)}</td>
              <td>${escapeHtml(item.quantity)}</td>
              <td>${money(Number(item.price))}</td>
              <td>${money(Number(item.quantity) * Number(item.price))}</td>
            </tr>
          `
        )
        .join("")
    : `
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    `;

  printInvoiceSheet.innerHTML = `
    <div class="print-page">
      <header class="print-header">
        <div class="print-shop">
          <div class="print-logo">
            ${shopData.logo ? `<img src="${shopData.logo}" alt="${escapeHtml(t("shopLogoLabel"))}" />` : `<span>${escapeHtml(t("logoPlaceholder"))}</span>`}
          </div>
          <strong>${escapeHtml(shopData.name || t("shopInfo"))}</strong>
          <span>${escapeHtml(shopData.phone || "")}</span>
          <span>${escapeHtml(shopData.address || "")}</span>
          <span>${escapeHtml(shopData.email || "")}</span>
        </div>
        <div class="print-meta">
          <strong>${escapeHtml(t("invoiceWord"))}: ${escapeHtml(invoiceNumber)}</strong>
          <span>${escapeHtml(t("invoiceDate"))}: ${escapeHtml(date)}</span>
          <span>${escapeHtml(t("paymentLabel"))}: ${escapeHtml(paymentStatus.options[paymentStatus.selectedIndex].text)}</span>
          <span>${escapeHtml(t("serviceWriterLabel"))}: ${escapeHtml(shopData.name || "")}</span>
        </div>
      </header>

      <section class="print-vehicle-summary">
        <h1>${escapeHtml(vehicle)}</h1>
        <p>VIN: ${escapeHtml(vin)} <span>|</span> ${escapeHtml(t("plateLabel"))}: ${escapeHtml(plate)} <span>|</span> ${escapeHtml(t("mileageLabel"))}: In ${escapeHtml(mileageIn)} | Out ${escapeHtml(mileageOut)}</p>
      </section>

      <section class="print-parties">
        <div class="print-vehicle-box">
          <h2>${escapeHtml(t("vehicleInfo"))}</h2>
          <p><strong>${escapeHtml(vehicle)}</strong></p>
          <p>VIN: ${escapeHtml(vin)}</p>
          <p>${escapeHtml(t("plateLabel"))}: ${escapeHtml(plate)}</p>
          <p>${escapeHtml(t("mileageLabel"))}: In ${escapeHtml(mileageIn)} | Out ${escapeHtml(mileageOut)}</p>
        </div>
        <div>
          <h2>${escapeHtml(t("billTo"))}</h2>
          <p><strong>${escapeHtml(customer)}</strong></p>
          <p>${escapeHtml(phone)}</p>
        </div>
      </section>

      <table class="print-table">
        <thead>
          <tr>
            <th>${escapeHtml(t("typeLabel"))}</th>
            <th>${escapeHtml(t("itemLabel"))}</th>
            <th>${escapeHtml(t("tableQuantity"))}</th>
            <th>${escapeHtml(t("tablePrice"))}</th>
            <th>${escapeHtml(t("tableTotal"))}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>

      <section class="print-bottom">
        <div class="print-terms">
          <p>${escapeHtml(t("termsText"))}</p>
          ${notes ? `<p><strong>${escapeHtml(t("notesLabelPrint"))}:</strong> ${escapeHtml(notes).replaceAll("\n", "<br />")}</p>` : ""}
          <div class="print-signature">
            <span>X</span>
            <div>
              <p>${escapeHtml(t("signatureLabel"))}</p>
            </div>
            <time>${escapeHtml(date)}</time>
          </div>
        </div>
        <div class="print-totals">
          <p><span>Parts</span><strong>${money(totals.parts)}</strong></p>
          <p><span>Labor</span><strong>${money(totals.labor)}</strong></p>
          <p><span>Shop Supplies</span><strong>${money(0)}</strong></p>
          <p><span>${escapeHtml(t("subtotalLabel"))}</span><strong>${money(totals.subtotal)}</strong></p>
          <p><span>${escapeHtml(t("taxLabel"))}</span><strong>${money(totals.tax)}</strong></p>
          <p class="print-grand"><span>${escapeHtml(t("totalLabel"))}</span><strong>${money(totals.total)}</strong></p>
        </div>
      </section>
    </div>
  `;
}

function renderHistory() {
  if (!savedInvoices.length) {
    historyGrid.innerHTML = `<article class="history-card empty-card"><p>${t("emptyHistory")}</p></article>`;
    return;
  }

  historyGrid.innerHTML = savedInvoices
    .slice()
    .reverse()
    .map(
      (invoice) => `
        <article class="history-card">
          <div>
            <strong>${invoice.number}</strong>
            ${
              invoice.parentInvoiceNumber
                ? `<p><strong>${escapeHtml(t("linkedInvoice"))}:</strong> ${escapeHtml(invoice.parentInvoiceNumber)}</p>`
                : ""
            }
            <p>${escapeHtml(invoice.customer)}</p>
            <span>${escapeHtml(invoice.vehicle)}</span>
            <button type="button" data-open-invoice="${invoice.id}">${t("openInvoice")}</button>
          </div>
          <div class="history-side">
            <strong>${money(invoice.total)}</strong>
            <span class="status-tag" data-status="${invoice.status}">${statusText(invoice.status)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRecords() {
  const query = recordSearchInput.value.trim().toLowerCase();
  const customers = filterRecords(savedCustomers, query, ["name", "phone"]);
  const vehicles = filterRecords(savedVehicles, query, ["vehicle", "vin", "plate", "customerName", "customerPhone"]);

  customersList.innerHTML = customers.length
    ? customers
        .map(
          (customer) => `
            <div class="record-item">
              <div>
                <strong>${escapeHtml(customer.name)}</strong>
                <p>${escapeHtml(customer.phone || t("fallbackPhone"))}</p>
              </div>
              <button type="button" data-use-customer="${customer.id}">${t("useRecord")}</button>
            </div>
          `
        )
        .join("")
    : `<div class="record-item"><p>${t("emptyCustomers")}</p></div>`;

  vehiclesList.innerHTML = vehicles.length
    ? vehicles
        .map(
          (vehicle) => `
            <div class="record-item">
              <div>
                <strong>${escapeHtml(vehicle.vehicle)}</strong>
                <p>VIN: ${escapeHtml(vehicle.vin || t("fallbackVin"))}</p>
                <p>${escapeHtml(t("plateLabel"))}: ${escapeHtml(vehicle.plate || t("fallbackPlate"))}</p>
                <p>${escapeHtml(t("linkedCustomer"))}: ${escapeHtml(vehicle.customerName || t("fallbackCustomer"))}</p>
              </div>
              <button type="button" data-use-vehicle="${vehicle.id}">${t("useRecord")}</button>
            </div>
          `
        )
        .join("")
    : `<div class="record-item"><p>${t("emptyVehicles")}</p></div>`;
}

function filterRecords(records, query, keys) {
  if (!query) {
    return records;
  }

  return records.filter((record) =>
    keys.some((key) => String(record[key] || "").toLowerCase().includes(query))
  );
}

function statusText(status) {
  const keys = {
    pendiente: "statusPending",
    pagado: "statusPaid",
    parcial: "statusPartial",
  };

  return t(keys[status]);
}

function addItem(type) {
  const item =
    type === "part"
      ? { type: "part", description: t("newPart"), quantity: 1, price: 0 }
      : { type: "labor", description: t("newService"), quantity: 1, price: 0 };

  initialItems.push(item);
  renderItems();
  calculateTotals();
}

function nextInvoiceNumber() {
  return `AMP-${String(invoiceSequence + 1).padStart(4, "0")}`;
}

function syncInvoiceSequence() {
  const highestSaved = savedInvoices.reduce((highest, invoice) => {
    const match = String(invoice.number || "").match(/AMP-(\d+)/i);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, invoiceSequence);

  invoiceSequence = Math.max(invoiceSequence, highestSaved);
  localStorage.setItem("automanual-invoice-sequence", String(invoiceSequence));
}

function reserveInvoiceNumber() {
  syncInvoiceSequence();
  invoiceSequence += 1;
  localStorage.setItem("automanual-invoice-sequence", String(invoiceSequence));
  return `AMP-${String(invoiceSequence).padStart(4, "0")}`;
}

function upsertCustomer(invoice) {
  const key = `${invoice.customer.toLowerCase()}|${invoice.phone.toLowerCase()}`;
  let customer = savedCustomers.find((item) => item.key === key);

  if (!customer) {
    customer = {
      id: crypto.randomUUID(),
      key,
      name: invoice.customer,
      phone: invoice.phone,
      invoiceIds: [],
    };
    savedCustomers.push(customer);
  } else {
    customer.name = invoice.customer;
    customer.phone = invoice.phone;
  }

  if (!customer.invoiceIds.includes(invoice.id)) {
    customer.invoiceIds.push(invoice.id);
  }

  return customer;
}

function upsertVehicle(invoice, customer) {
  const key = (invoice.vin || invoice.plate || invoice.vehicle).toLowerCase();
  let vehicle = savedVehicles.find((item) => item.key === key);

  if (!vehicle) {
    vehicle = {
      id: crypto.randomUUID(),
      key,
      vehicle: invoice.vehicle,
      vin: invoice.vin,
      plate: invoice.plate,
      customerId: customer.id,
      customerName: customer.name,
      customerPhone: customer.phone,
      invoiceIds: [],
    };
    savedVehicles.push(vehicle);
  } else {
    vehicle.vehicle = invoice.vehicle;
    vehicle.vin = invoice.vin;
    vehicle.plate = invoice.plate;
    vehicle.customerId = customer.id;
    vehicle.customerName = customer.name;
    vehicle.customerPhone = customer.phone;
  }

  if (!vehicle.invoiceIds.includes(invoice.id)) {
    vehicle.invoiceIds.push(invoice.id);
  }
}

function collectInvoiceData(options = {}) {
  if (!requireShopSetup()) {
    return null;
  }

  const customer = document.querySelector("#customerName").value.trim();
  const phone = document.querySelector("#customerPhone").value.trim();
  const vehicle = document.querySelector("#vehicleName").value.trim();
  const vin = document.querySelector("#vehicleVin").value.trim().toUpperCase();
  const plate = document.querySelector("#vehiclePlate").value.trim().toUpperCase();
  const mileageIn = mileageInInput.value.trim();
  const mileageOut = mileageOutInput.value.trim();

  if (!customer || !vehicle || !initialItems.length) {
    alert(t("invoiceRequired"));
    return null;
  }

  const totals = getTotals();
  return {
    customer,
    phone,
    vehicle,
    vin,
    plate,
    mileageIn,
    mileageOut,
    notes: invoiceNotes.value.trim(),
    status: paymentStatus.value,
    items: initialItems.map((item) => ({ ...item })),
    subtotal: totals.subtotal,
    tax: totals.tax,
    total: totals.total,
    parentInvoiceId: options.parentInvoiceId || null,
    parentInvoiceNumber: options.parentInvoiceNumber || null,
    duplicatedFromId: options.duplicatedFromId || null,
  };
}

function persistInvoiceRelations(invoice) {
  const savedCustomer = upsertCustomer(invoice);
  upsertVehicle(invoice, savedCustomer);
  saveRecords();
  renderHistory();
  renderRecords();
}

function saveInvoice() {
  const invoiceData = collectInvoiceData({
    parentInvoiceId: invoicePreview.dataset.parentInvoiceId || null,
    parentInvoiceNumber: invoicePreview.dataset.parentInvoiceNumber || null,
    duplicatedFromId: invoicePreview.dataset.parentInvoiceId || null,
  });

  if (!invoiceData) {
    return;
  }

  const invoice = {
    id: crypto.randomUUID(),
    number: currentInvoiceNumberReserved ? invoiceNumberInput.value.trim() : reserveInvoiceNumber(),
    createdAt: new Date().toISOString(),
    ...invoiceData,
  };

  savedInvoices.push(invoice);
  currentInvoiceNumberReserved = false;
  delete invoicePreview.dataset.parentInvoiceId;
  delete invoicePreview.dataset.parentInvoiceNumber;
  invoiceNumberInput.value = nextInvoiceNumber();
  persistInvoiceRelations(invoice);
  alert(`${t("saveMessage")} ${money(invoice.total)}`);
}

function updateInvoice() {
  const invoice = savedInvoices.find((item) => item.id === editingInvoiceId);

  if (!invoice) {
    return;
  }

  if (invoice.status === "pagado") {
    alert(t("invoiceLocked"));
    updateInvoiceMode();
    return;
  }

  const invoiceData = collectInvoiceData({
    parentInvoiceId: invoice.parentInvoiceId,
    parentInvoiceNumber: invoice.parentInvoiceNumber,
    duplicatedFromId: invoice.duplicatedFromId,
  });

  if (!invoiceData) {
    return;
  }

  Object.assign(invoice, invoiceData, {
    updatedAt: new Date().toISOString(),
  });
  persistInvoiceRelations(invoice);
  updateInvoiceMode();
  alert(t("invoiceUpdated"));
}

function startNewInvoice() {
  if (!requireShopSetup()) {
    return;
  }

  editingInvoiceId = null;
  delete invoicePreview.dataset.parentInvoiceId;
  delete invoicePreview.dataset.parentInvoiceNumber;
  invoiceNumberInput.value = reserveInvoiceNumber();
  currentInvoiceNumberReserved = true;
  document.querySelector("#customerName").value = "";
  document.querySelector("#customerPhone").value = "";
  document.querySelector("#vehicleName").value = "";
  document.querySelector("#vehicleVin").value = "";
  document.querySelector("#vehiclePlate").value = "";
  mileageInInput.value = "";
  mileageOutInput.value = "";
  invoiceNotes.value = "";
  initialItems.splice(0, initialItems.length);
  renderItems();
  calculateTotals();
  updateInvoiceMode();
  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useCustomer(id) {
  const customer = savedCustomers.find((item) => item.id === id);

  if (!customer) {
    return;
  }

  editingInvoiceId = null;
  delete invoicePreview.dataset.parentInvoiceId;
  delete invoicePreview.dataset.parentInvoiceNumber;
  invoiceNumberInput.value = reserveInvoiceNumber();
  currentInvoiceNumberReserved = true;
  document.querySelector("#customerName").value = customer.name;
  document.querySelector("#customerPhone").value = customer.phone;
  updateInvoiceMode();
  calculateTotals();
  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useVehicle(id) {
  const vehicle = savedVehicles.find((item) => item.id === id);

  if (!vehicle) {
    return;
  }

  editingInvoiceId = null;
  delete invoicePreview.dataset.parentInvoiceId;
  delete invoicePreview.dataset.parentInvoiceNumber;
  invoiceNumberInput.value = reserveInvoiceNumber();
  currentInvoiceNumberReserved = true;
  document.querySelector("#customerName").value = vehicle.customerName;
  document.querySelector("#customerPhone").value = vehicle.customerPhone;
  document.querySelector("#vehicleName").value = vehicle.vehicle;
  document.querySelector("#vehicleVin").value = vehicle.vin;
  document.querySelector("#vehiclePlate").value = vehicle.plate;
  mileageInInput.value = "";
  mileageOutInput.value = "";
  updateInvoiceMode();
  calculateTotals();
  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openInvoice(id) {
  const invoice = savedInvoices.find((item) => item.id === id);

  if (!invoice) {
    return;
  }

  editingInvoiceId = invoice.id;
  delete invoicePreview.dataset.parentInvoiceId;
  delete invoicePreview.dataset.parentInvoiceNumber;
  invoiceNumberInput.value = invoice.number;
  currentInvoiceNumberReserved = false;
  document.querySelector("#customerName").value = invoice.customer;
  document.querySelector("#customerPhone").value = invoice.phone;
  document.querySelector("#vehicleName").value = invoice.vehicle;
  document.querySelector("#vehicleVin").value = invoice.vin;
  document.querySelector("#vehiclePlate").value = invoice.plate;
  mileageInInput.value = invoice.mileageIn || "";
  mileageOutInput.value = invoice.mileageOut || "";
  invoiceNotes.value = invoice.notes || "";
  paymentStatus.value = invoice.status || "pendiente";
  initialItems.splice(
    0,
    initialItems.length,
    ...invoice.items.map((item) => ({ type: item.type || "part", ...item }))
  );
  renderItems();
  calculateTotals();
  updateInvoiceMode();
  alert(invoice.status === "pagado" ? t("invoiceLocked") : t("invoiceSavedOpen"));
  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function duplicateInvoice(mode) {
  const original = savedInvoices.find((item) => item.id === editingInvoiceId);

  if (!original) {
    return;
  }

  const shouldLink = linkDuplicateInput.checked;
  editingInvoiceId = null;
  invoiceNumberInput.value = reserveInvoiceNumber();
  currentInvoiceNumberReserved = true;
  paymentStatus.value = "pendiente";

  if (mode === "basic") {
    initialItems.splice(0, initialItems.length);
    invoiceNotes.value = "";
    mileageInInput.value = "";
    mileageOutInput.value = "";
  } else {
    initialItems.splice(0, initialItems.length, ...original.items.map((item) => ({ ...item })));
    invoiceNotes.value = original.notes || "";
    mileageInInput.value = original.mileageIn || "";
    mileageOutInput.value = original.mileageOut || "";
  }

  document.querySelector("#customerName").value = original.customer;
  document.querySelector("#customerPhone").value = original.phone;
  document.querySelector("#vehicleName").value = original.vehicle;
  document.querySelector("#vehicleVin").value = original.vin;
  document.querySelector("#vehiclePlate").value = original.plate;

  if (shouldLink) {
    invoicePreview.dataset.parentInvoiceId = original.parentInvoiceId || original.id;
    invoicePreview.dataset.parentInvoiceNumber = original.parentInvoiceNumber || original.number;
  } else {
    delete invoicePreview.dataset.parentInvoiceId;
    delete invoicePreview.dataset.parentInvoiceNumber;
  }

  renderItems();
  calculateTotals();
  updateInvoiceMode();
  alert(t("invoiceDuplicated"));
  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exportBackup() {
  const payload = {
    exportedAt: new Date().toISOString(),
    shopData,
    invoices: savedInvoices,
    customers: savedCustomers,
    vehicles: savedVehicles,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `automanual-pro-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  alert(t("exportDone"));
}

function getVinValue(results, key) {
  const match = results.find((item) => item.Variable === key);
  return match && match.Value ? match.Value : "";
}

async function lookupVin() {
  const vinInput = document.querySelector("#vehicleVin");
  const vin = vinInput.value.trim().toUpperCase();

  vinInput.value = vin;

  if (vin.length !== 17) {
    alert(t("vinTooShort"));
    return;
  }

  const lookupButton = document.querySelector("#lookupVin");
  lookupButton.disabled = true;
  lookupButton.textContent = "...";

  try {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${encodeURIComponent(vin)}?format=json`);

    if (!response.ok) {
      throw new Error("VIN lookup failed");
    }

    const data = await response.json();
    const results = Array.isArray(data.Results) ? data.Results : [];
    const year = getVinValue(results, "Model Year");
    const make = getVinValue(results, "Make");
    const model = getVinValue(results, "Model");
    const engine = getVinValue(results, "Engine Model") || getVinValue(results, "Engine Configuration");
    const vehicleType = getVinValue(results, "Vehicle Type");
    const vehicleParts = [year, make, model].filter(Boolean);

    if (!vehicleParts.length) {
      alert(t("vinNoResults"));
      return;
    }

    document.querySelector("#vehicleName").value = vehicleParts.join(" ");

    if (engine || vehicleType) {
      const currentNotes = invoiceNotes.value.trim();
      const vinNote = [vehicleType, engine].filter(Boolean).join(" - ");
      invoiceNotes.value = currentNotes ? `${currentNotes}\n${vinNote}` : vinNote;
    }

    calculateTotals();
    alert(t("vinLookupSuccess"));
  } catch {
    alert(t("vinLookupError"));
  } finally {
    lookupButton.disabled = false;
    lookupButton.textContent = t("lookupVin");
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  const selectedStatus = paymentStatus.value;
  paymentStatus.querySelectorAll("option").forEach((option) => {
    option.textContent = statusText(option.value);
  });
  paymentStatus.value = selectedStatus;

  initialItems.forEach((item) => {
    if (item.descriptionKey) {
      item.description = t(item.descriptionKey);
    }
  });

  renderShopDetails();
  updateSetupGate();
  applyHeroPreference();
  renderItems();
  renderHistory();
  renderRecords();
  calculateTotals();
}

invoiceItems.addEventListener("input", (event) => {
  const field = event.target.dataset.field;
  const index = Number(event.target.dataset.index);

  if (!field || field === "type" || Number.isNaN(index)) {
    return;
  }

  initialItems[index][field] = field === "description" ? event.target.value : Number(event.target.value);
  initialItems[index].descriptionKey = null;
  updateLineTotal(event.target);
  calculateTotals();
});

invoiceItems.addEventListener("change", (event) => {
  const field = event.target.dataset.field;
  const index = Number(event.target.dataset.index);

  if (field !== "type" || Number.isNaN(index)) {
    return;
  }

  initialItems[index].type = event.target.value;
  calculateTotals();
});

invoiceItems.addEventListener("click", (event) => {
  const index = event.target.dataset.remove;

  if (index === undefined) {
    return;
  }

  initialItems.splice(Number(index), 1);
  renderItems();
  calculateTotals();
});

document.querySelector("#addService").addEventListener("click", () => addItem("service"));
document.querySelector("#addPart").addEventListener("click", () => addItem("part"));
document.querySelector("#lookupVin").addEventListener("click", lookupVin);
toggleHeroButton.addEventListener("click", toggleHero);
menuButton.addEventListener("click", toggleMenu);
document.querySelector("#mainNav").addEventListener("click", (event) => {
  if (event.target.tagName === "A" || event.target.id === "toggleHero") {
    closeMenu();
  }
});
document.addEventListener("click", (event) => {
  if (!headerMenu.contains(event.target)) {
    closeMenu();
  }
});
taxRate.addEventListener("input", calculateTotals);
invoiceNotes.addEventListener("input", calculateTotals);
invoiceNumberInput.addEventListener("input", calculateTotals);
mileageInInput.addEventListener("input", calculateTotals);
mileageOutInput.addEventListener("input", calculateTotals);
paymentStatus.addEventListener("change", calculateTotals);
languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
document.querySelector("#saveShop").addEventListener("click", saveShopData);
document.querySelector("#clearShop").addEventListener("click", clearShopData);

createInvoiceLink.addEventListener("click", (event) => {
  event.preventDefault();
  startNewInvoice();
});

heroCreateInvoiceLink.addEventListener("click", (event) => {
  event.preventDefault();
  startNewInvoice();
});

setupNavLink.addEventListener("click", () => {
  setupEditorOpen = true;
  setupSection.classList.remove("is-hidden");
  updateSetupGate();
});

shopLogo.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  if (file.type !== "image/png") {
    alert(t("logoPngOnly"));
    shopLogo.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    shopData.logo = reader.result;
    localStorage.setItem("automanual-shop", JSON.stringify(shopData));
    renderShopDetails();
    updateSetupGate();
  });
  reader.readAsDataURL(file);
});

["customerName", "customerPhone", "vehicleName", "vehicleVin", "vehiclePlate"].forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("input", calculateTotals);
});

recordSearchInput.addEventListener("input", renderRecords);
document.querySelector("#recordSearchButton").addEventListener("click", renderRecords);

customersList.addEventListener("click", (event) => {
  const id = event.target.dataset.useCustomer;

  if (id) {
    useCustomer(id);
  }
});

vehiclesList.addEventListener("click", (event) => {
  const id = event.target.dataset.useVehicle;

  if (id) {
    useVehicle(id);
  }
});

historyGrid.addEventListener("click", (event) => {
  const id = event.target.dataset.openInvoice;

  if (id) {
    openInvoice(id);
  }
});

document.querySelector("#saveInvoice").addEventListener("click", saveInvoice);
updateInvoiceButton.addEventListener("click", updateInvoice);
duplicateFullButton.addEventListener("click", () => duplicateInvoice("full"));
duplicateBasicButton.addEventListener("click", () => duplicateInvoice("basic"));
document.querySelector("#exportData").addEventListener("click", exportBackup);

document.querySelector("#printInvoice").addEventListener("click", () => {
  if (!requireShopSetup()) {
    return;
  }

  window.print();
});

loadShopData();
loadRecords();
invoiceNumberInput.value = nextInvoiceNumber();
applyLanguage(currentLanguage);
