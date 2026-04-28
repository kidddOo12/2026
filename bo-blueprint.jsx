import { useState } from "react";

const colors = {
  bg: "#0a0e1a",
  panel: "#0f1628",
  border: "#1e2d4a",
  accent: "#00d4ff",
  accent2: "#00ff9d",
  accent3: "#ff6b35",
  accent4: "#a78bfa",
  text: "#e2e8f0",
  muted: "#64748b",
  public: "#00ff9d",
  restricted: "#fbbf24",
  none: "#f87171",
  planned: "#a78bfa",
};

const tabs = ["Overview", "Repo Structure", "Data Schema", "Pages", "Countries", "Timeline"];

const statusColors = {
  public: colors.public,
  restricted: colors.restricted,
  none: colors.none,
  planned: colors.accent4,
  legislation_only: colors.accent,
};

export default function Blueprint() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div style={{
      background: colors.bg,
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: colors.text,
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: `1px solid ${colors.border}`,
        padding: "24px 32px",
        background: colors.panel,
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}>
        <div style={{
          width: 40, height: 40,
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent2})`,
          borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, fontWeight: "bold", color: "#000",
        }}>BO</div>
        <div>
          <div style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 2, color: colors.accent }}>
            bo-register-index
          </div>
          <div style={{ fontSize: 11, color: colors.muted, letterSpacing: 1 }}>
            GLOBAL BENEFICIAL OWNERSHIP TRACKER · PROJECT BLUEPRINT
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {["MIT", "v1.0", "Free"].map(tag => (
            <span key={tag} style={{
              padding: "3px 10px", borderRadius: 4,
              border: `1px solid ${colors.border}`,
              fontSize: 10, color: colors.muted, letterSpacing: 1,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", gap: 0,
        borderBottom: `1px solid ${colors.border}`,
        background: colors.panel,
        padding: "0 32px",
        overflowX: "auto",
      }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            background: "none", border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            fontSize: 11, letterSpacing: 1,
            color: activeTab === tab ? colors.accent : colors.muted,
            borderBottom: activeTab === tab ? `2px solid ${colors.accent}` : "2px solid transparent",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}>{tab.toUpperCase()}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "32px", maxWidth: 1100, margin: "0 auto" }}>
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Repo Structure" && <RepoTab />}
        {activeTab === "Data Schema" && <SchemaTab />}
        {activeTab === "Pages" && <PagesTab />}
        {activeTab === "Countries" && <CountriesTab />}
        {activeTab === "Timeline" && <TimelineTab />}
      </div>
    </div>
  );
}

function SectionTitle({ children, accent }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontSize: 10, letterSpacing: 3, color: accent || colors.accent,
        marginBottom: 4,
      }}>■ {children.toUpperCase()}</div>
      <div style={{ width: 40, height: 1, background: accent || colors.accent }} />
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: colors.panel,
      border: `1px solid ${colors.border}`,
      borderRadius: 8,
      padding: 20,
      ...style,
    }}>{children}</div>
  );
}

function OverviewTab() {
  const stats = [
    { label: "Countries (V1)", value: "45", color: colors.accent },
    { label: "Public Registers", value: "~28", color: colors.accent2 },
    { label: "With APIs", value: "~12", color: colors.accent4 },
    { label: "Build Cost", value: "₹0", color: colors.accent3 },
  ];

  const stack = [
    { layer: "Hosting", tool: "GitHub Pages", icon: "🌐" },
    { layer: "Data", tool: "registers.json", icon: "📄" },
    { layer: "UI", tool: "HTML/CSS/JS + Leaflet.js", icon: "🎨" },
    { layer: "CI/CD", tool: "GitHub Actions", icon: "⚙️" },
    { layer: "Validation", tool: "validate.js", icon: "✅" },
    { layer: "Domain", tool: "github.io (free)", icon: "🔗" },
  ];

  const audience = [
    { role: "AML Analysts", use: "Quick jurisdiction BO check during investigations" },
    { role: "KYB Teams", use: "Assess data availability before customer onboarding" },
    { role: "Big 4 Consultants", use: "Jurisdiction comparison for risk assessments" },
    { role: "Investigators", use: "Access to official registry links fast" },
    { role: "Developers", use: "Machine-readable JSON for integration" },
    { role: "Journalists", use: "Offshore structure research" },
  ];

  return (
    <div>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}>
        {stats.map(s => (
          <Card key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, fontWeight: "bold", color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 10, color: colors.muted, letterSpacing: 1 }}>{s.label.toUpperCase()}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
        {/* Tech Stack */}
        <Card>
          <SectionTitle>Tech Stack</SectionTitle>
          {stack.map(s => (
            <div key={s.layer} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "8px 0", borderBottom: `1px solid ${colors.border}`,
            }}>
              <span style={{ fontSize: 16 }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: 10, color: colors.muted, letterSpacing: 1 }}>{s.layer.toUpperCase()}</div>
                <div style={{ fontSize: 13, color: colors.text }}>{s.tool}</div>
              </div>
            </div>
          ))}
        </Card>

        {/* Audience */}
        <Card>
          <SectionTitle accent={colors.accent2}>Target Audience</SectionTitle>
          {audience.map(a => (
            <div key={a.role} style={{
              padding: "8px 0", borderBottom: `1px solid ${colors.border}`,
            }}>
              <div style={{ fontSize: 11, color: colors.accent2, marginBottom: 2 }}>{a.role}</div>
              <div style={{ fontSize: 11, color: colors.muted }}>{a.use}</div>
            </div>
          ))}
        </Card>
      </div>

      {/* Why now */}
      <Card style={{ borderLeft: `3px solid ${colors.accent3}` }}>
        <div style={{ fontSize: 10, color: colors.accent3, letterSpacing: 2, marginBottom: 8 }}>■ WHY THIS, WHY NOW</div>
        <div style={{ fontSize: 13, color: colors.text, lineHeight: 1.8 }}>
          FATF revised <span style={{ color: colors.accent }}>Recommendation 24</span> in October 2022 — the most significant BO update in a decade.
          40+ member countries are at different implementation stages. Compliance teams track this <span style={{ color: colors.accent3 }}>manually</span>.
          There is no clean, open-source, structured, maintained tracker for this gap.
          <br /><br />
          This project fills that gap with analyst-grade data, machine-readable format, and a searchable public UI.
        </div>
      </Card>
    </div>
  );
}

function RepoTab() {
  const tree = [
    { indent: 0, name: "bo-register-index/", type: "folder" },
    { indent: 1, name: "data/", type: "folder" },
    { indent: 2, name: "registers.json", type: "file", note: "← Master dataset" },
    { indent: 2, name: "schema.md", type: "file", note: "← Field definitions" },
    { indent: 2, name: "changelog.md", type: "file", note: "← What changed + when" },
    { indent: 1, name: "docs/", type: "folder", note: "← GitHub Pages root" },
    { indent: 2, name: "index.html", type: "file", note: "← Homepage + table" },
    { indent: 2, name: "country.html", type: "file", note: "← Country detail page" },
    { indent: 2, name: "map.html", type: "file", note: "← World map view" },
    { indent: 2, name: "about.html", type: "file", note: "← Project info" },
    { indent: 2, name: "assets/", type: "folder" },
    { indent: 3, name: "css/style.css", type: "file" },
    { indent: 3, name: "js/main.js", type: "file", note: "← Search + filter" },
    { indent: 3, name: "js/map.js", type: "file", note: "← Map rendering" },
    { indent: 3, name: "js/country.js", type: "file", note: "← Country cards" },
    { indent: 1, name: ".github/workflows/", type: "folder" },
    { indent: 2, name: "validate.yml", type: "file", note: "← Auto JSON validator" },
    { indent: 1, name: "CONTRIBUTING.md", type: "file", note: "← How to add a country" },
    { indent: 1, name: "README.md", type: "file", note: "← Project intro" },
    { indent: 1, name: "LICENSE", type: "file", note: "← MIT" },
    { indent: 1, name: "validate.js", type: "file", note: "← Schema validator script" },
  ];

  return (
    <div>
      <SectionTitle>Repository Structure</SectionTitle>
      <Card style={{ fontFamily: "monospace" }}>
        {tree.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "baseline",
            padding: "3px 0",
            paddingLeft: item.indent * 20,
          }}>
            <span style={{ color: item.type === "folder" ? colors.accent : colors.accent2, marginRight: 8 }}>
              {item.type === "folder" ? "📁" : "📄"}
            </span>
            <span style={{
              color: item.type === "folder" ? colors.accent : colors.text,
              fontSize: 13,
              fontWeight: item.type === "folder" ? "bold" : "normal",
            }}>{item.name}</span>
            {item.note && (
              <span style={{ fontSize: 11, color: colors.muted, marginLeft: 12 }}>{item.note}</span>
            )}
          </div>
        ))}
      </Card>

      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[
          { label: "Data Layer", desc: "Pure JSON — no database, no backend, no cost", color: colors.accent },
          { label: "UI Layer", desc: "Static HTML/JS — loads from JSON client-side", color: colors.accent2 },
          { label: "CI Layer", desc: "GitHub Actions validates every PR automatically", color: colors.accent4 },
        ].map(c => (
          <Card key={c.label} style={{ borderTop: `2px solid ${c.color}` }}>
            <div style={{ fontSize: 11, color: c.color, letterSpacing: 1, marginBottom: 6 }}>{c.label.toUpperCase()}</div>
            <div style={{ fontSize: 12, color: colors.muted }}>{c.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SchemaTab() {
  const fields = [
    { field: "country", type: "string", required: true, example: "United Kingdom", note: "Full country name" },
    { field: "iso_code", type: "string", required: true, example: "GB", note: "ISO 3166-1 alpha-2" },
    { field: "fatf_member", type: "boolean", required: true, example: "true", note: "" },
    { field: "fatf_region", type: "string", required: true, example: "FATF", note: "FATF / FSRB name" },
    { field: "register_name", type: "string", required: true, example: "Companies House PSC", note: "Official register name" },
    { field: "register_status", type: "enum", required: true, example: "public", note: "See valid values below" },
    { field: "access_type", type: "enum", required: true, example: "free", note: "free / paid / restricted" },
    { field: "api_available", type: "boolean", required: false, example: "true", note: "" },
    { field: "api_url", type: "string", required: false, example: "developer.company-information...", note: "If API exists" },
    { field: "entity_types_covered", type: "array", required: true, example: '["companies","LLPs"]', note: "" },
    { field: "trusts_covered", type: "boolean", required: true, example: "false", note: "High-risk gap indicator" },
    { field: "uo_threshold_percent", type: "number", required: true, example: "25", note: "Standard is 25%" },
    { field: "direct_url", type: "string", required: true, example: "find-and-update.company-information...", note: "" },
    { field: "fatf_r24_rating", type: "enum", required: true, example: "largely_compliant", note: "From FATF MER" },
    { field: "data_quality_score", type: "number", required: true, example: "4", note: "1–5 scale" },
    { field: "quality_notes", type: "string", required: true, example: "PSC register is public and free...", note: "Analyst narrative" },
    { field: "last_verified", type: "string", required: true, example: "2025-04", note: "YYYY-MM format" },
    { field: "data_contributor", type: "string", required: true, example: "vikas-aml", note: "GitHub username" },
  ];

  const validStatus = ["public", "public_paid", "restricted", "government_only", "legislation_only", "planned", "none"];
  const validRatings = ["compliant", "largely_compliant", "partially_compliant", "non_compliant", "not_yet_evaluated"];

  return (
    <div>
      <SectionTitle>Data Schema — registers.json</SectionTitle>

      <Card style={{ marginBottom: 20, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
              {["Field", "Type", "Required", "Example", "Notes"].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: colors.muted, fontSize: 10, letterSpacing: 1 }}>
                  {h.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((f, i) => (
              <tr key={f.field} style={{ borderBottom: `1px solid ${colors.border}`, background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                <td style={{ padding: "7px 12px", color: colors.accent, fontFamily: "monospace" }}>{f.field}</td>
                <td style={{ padding: "7px 12px", color: colors.accent4 }}>{f.type}</td>
                <td style={{ padding: "7px 12px" }}>
                  <span style={{ color: f.required ? colors.accent2 : colors.muted, fontSize: 10 }}>
                    {f.required ? "YES" : "no"}
                  </span>
                </td>
                <td style={{ padding: "7px 12px", color: colors.muted, fontFamily: "monospace", fontSize: 11 }}>{f.example}</td>
                <td style={{ padding: "7px 12px", color: colors.muted, fontSize: 11 }}>{f.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card>
          <div style={{ fontSize: 10, color: colors.accent, letterSpacing: 2, marginBottom: 12 }}>■ REGISTER_STATUS VALID VALUES</div>
          {validStatus.map(v => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: statusColors[v] || colors.muted }} />
              <span style={{ fontSize: 12, fontFamily: "monospace", color: colors.text }}>{v}</span>
            </div>
          ))}
        </Card>
        <Card>
          <div style={{ fontSize: 10, color: colors.accent4, letterSpacing: 2, marginBottom: 12 }}>■ FATF_R24_RATING VALID VALUES</div>
          {validRatings.map((v, i) => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
              <div style={{ fontSize: 14 }}>{["✅","🟡","🟠","🔴","⬜"][i]}</div>
              <span style={{ fontSize: 12, fontFamily: "monospace", color: colors.text }}>{v}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, padding: "8px", background: "rgba(0,212,255,0.05)", borderRadius: 4, fontSize: 11, color: colors.muted }}>
            Source: FATF Mutual Evaluation Reports (MERs)
          </div>
        </Card>
      </div>
    </div>
  );
}

function PagesTab() {
  const pages = [
    {
      file: "index.html",
      title: "Homepage",
      color: colors.accent,
      elements: [
        "Project header + tagline",
        "Stats bar: X countries | Y public | Z with APIs",
        "Filter bar: Status / Region / FATF Rating / API",
        "Search box by country name",
        "Sortable table: Flag | Country | Status | Access | Threshold | API | R.24 | Link",
        "Footer with GitHub + data sources",
      ],
    },
    {
      file: "country.html",
      title: "Country Detail",
      color: colors.accent2,
      elements: [
        "Flag + Country name + ISO code header",
        "Large status badge (Public / Restricted / None)",
        "Full info grid — all schema fields",
        "Direct link button to official registry",
        "FATF MER link",
        "Analyst quality notes section",
        "Last verified date + contributor",
      ],
    },
    {
      file: "map.html",
      title: "World Map",
      color: colors.accent3,
      elements: [
        "Leaflet.js + OpenStreetMap base",
        "Green = Public register",
        "Yellow = Restricted / legislation only",
        "Red = None or planned only",
        "Click country → detail card overlay",
        "Filter toggle by status",
        "Legend panel",
      ],
    },
    {
      file: "about.html",
      title: "About",
      color: colors.accent4,
      elements: [
        "What is a beneficial ownership register?",
        "Why FATF R.24 matters",
        "How data is collected and verified",
        "Full data sources list",
        "How to contribute (link to CONTRIBUTING.md)",
        "Who built this",
      ],
    },
  ];

  return (
    <div>
      <SectionTitle>Pages Blueprint</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {pages.map(p => (
          <Card key={p.file} style={{ borderTop: `2px solid ${p.color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: p.color, background: `${p.color}15`, padding: "3px 8px", borderRadius: 4 }}>
                {p.file}
              </div>
              <div style={{ fontSize: 14, color: colors.text, fontWeight: "bold" }}>{p.title}</div>
            </div>
            {p.elements.map((el, i) => (
              <div key={i} style={{ display: "flex", gap: 8, padding: "4px 0", alignItems: "flex-start" }}>
                <span style={{ color: p.color, fontSize: 10, marginTop: 3 }}>›</span>
                <span style={{ fontSize: 12, color: colors.muted }}>{el}</span>
              </div>
            ))}
          </Card>
        ))}
      </div>

      {/* Data flow */}
      <Card style={{ marginTop: 20 }}>
        <div style={{ fontSize: 10, color: colors.accent, letterSpacing: 2, marginBottom: 14 }}>■ DATA FLOW</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {[
            { label: "registers.json", color: colors.accent },
            "→",
            { label: "main.js reads + parses", color: colors.text },
            "→",
            { label: "Table renders client-side", color: colors.accent2 },
            "→",
            { label: "User filters/searches", color: colors.accent4 },
            "→",
            { label: "Country card opens", color: colors.accent3 },
          ].map((item, i) => typeof item === "string"
            ? <span key={i} style={{ color: colors.muted }}>{item}</span>
            : <span key={i} style={{ fontFamily: "monospace", fontSize: 12, color: item.color, background: `${item.color}15`, padding: "3px 8px", borderRadius: 4 }}>{item.label}</span>
          )}
        </div>
        <div style={{ marginTop: 10, fontSize: 11, color: colors.muted }}>
          No server. No API calls. Everything runs in the browser from a single JSON file.
        </div>
      </Card>
    </div>
  );
}

function CountriesTab() {
  const groups = [
    {
      name: "FATF Core", color: colors.accent, count: 15,
      countries: ["USA 🇺🇸", "UK 🇬🇧", "Germany 🇩🇪", "France 🇫🇷", "Netherlands 🇳🇱", "Canada 🇨🇦", "Australia 🇦🇺", "Singapore 🇸🇬", "Japan 🇯🇵", "UAE 🇦🇪", "Italy 🇮🇹", "Spain 🇪🇸", "Switzerland 🇨🇭", "Belgium 🇧🇪", "Sweden 🇸🇪"],
    },
    {
      name: "Offshore / High-Risk", color: colors.accent3, count: 10,
      countries: ["Cayman Islands 🇰🇾", "BVI 🇻🇬", "Panama 🇵🇦", "Seychelles 🇸🇨", "Marshall Islands 🇲🇭", "Mauritius 🇲🇺", "Bermuda 🇧🇲", "Jersey 🇯🇪", "Guernsey 🇬🇬", "Isle of Man 🇮🇲"],
    },
    {
      name: "APAC", color: colors.accent2, count: 8,
      countries: ["India 🇮🇳", "Hong Kong 🇭🇰", "Malaysia 🇲🇾", "South Korea 🇰🇷", "New Zealand 🇳🇿", "Indonesia 🇮🇩", "Philippines 🇵🇭", "Thailand 🇹🇭"],
    },
    {
      name: "MENA", color: colors.accent4, count: 6,
      countries: ["Saudi Arabia 🇸🇦", "Qatar 🇶🇦", "Bahrain 🇧🇭", "Kuwait 🇰🇼", "Egypt 🇪🇬", "Jordan 🇯🇴"],
    },
    {
      name: "Africa / Americas", color: "#fb923c", count: 6,
      countries: ["South Africa 🇿🇦", "Nigeria 🇳🇬", "Kenya 🇰🇪", "Brazil 🇧🇷", "Mexico 🇲🇽", "Argentina 🇦🇷"],
    },
  ];

  return (
    <div>
      <SectionTitle>V1 Country Coverage — 45 Countries</SectionTitle>
      <div style={{ display: "grid", gap: 14 }}>
        {groups.map(g => (
          <Card key={g.name} style={{ borderLeft: `3px solid ${g.color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ fontSize: 12, color: g.color, fontWeight: "bold", letterSpacing: 1 }}>
                {g.name.toUpperCase()}
              </div>
              <div style={{ fontSize: 10, color: colors.muted, background: `${g.color}20`, padding: "2px 8px", borderRadius: 10 }}>
                {g.count} countries
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.countries.map(c => (
                <span key={c} style={{
                  fontSize: 11, padding: "3px 10px",
                  borderRadius: 4, border: `1px solid ${colors.border}`,
                  color: colors.text, background: "rgba(255,255,255,0.02)",
                }}>{c}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TimelineTab() {
  const phases = [
    {
      phase: "Phase 1", week: "Week 1", title: "Foundation", color: colors.accent,
      tasks: [
        "Initialize GitHub repository",
        "Finalize data schema",
        "Seed data: 20 country entries in registers.json",
        "Write README + CONTRIBUTING.md",
        "Enable GitHub Pages",
      ],
      deliverable: "Live repo with data, no UI yet",
    },
    {
      phase: "Phase 2", week: "Week 2", title: "UI Build", color: colors.accent2,
      tasks: [
        "Build homepage with searchable table",
        "Filter bar: status / region / R.24 / API",
        "Country detail page (country.html)",
        "Basic responsive styling",
      ],
      deliverable: "Functional searchable site live at GitHub Pages URL",
    },
    {
      phase: "Phase 3", week: "Week 3", title: "Expand + Map", color: colors.accent4,
      tasks: [
        "Expand to 45 country entries",
        "World map view with Leaflet.js",
        "Color coding by register status",
        "GitHub Actions JSON validator on PRs",
      ],
      deliverable: "Full v1.0 — map + table + 45 countries + CI",
    },
    {
      phase: "Phase 4", week: "Week 4", title: "Launch", color: colors.accent3,
      tasks: [
        "LinkedIn article: 'Which countries have public BO registers in 2025?'",
        "Post in AML / compliance communities",
        "Submit to ACAMS forums",
        "Make repo public",
      ],
      deliverable: "Public launch — starts getting stars + contributors",
    },
  ];

  return (
    <div>
      <SectionTitle>Build Timeline — 4 Weeks</SectionTitle>
      <div style={{ display: "grid", gap: 16 }}>
        {phases.map((p, idx) => (
          <Card key={p.phase} style={{ borderLeft: `3px solid ${p.color}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ textAlign: "center", minWidth: 60 }}>
                <div style={{ fontSize: 20, fontWeight: "bold", color: p.color }}>{idx + 1}</div>
                <div style={{ fontSize: 9, color: colors.muted, letterSpacing: 1 }}>{p.week.toUpperCase()}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: colors.text }}>{p.title}</span>
                  <span style={{ fontSize: 10, color: p.color }}>{p.phase.toUpperCase()}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
                  {p.tasks.map(t => (
                    <div key={t} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontSize: 12 }}>□</span>
                      <span style={{ fontSize: 11, color: colors.muted }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  fontSize: 11, color: p.color,
                  background: `${p.color}10`,
                  padding: "6px 10px", borderRadius: 4,
                  fontStyle: "italic",
                }}>
                  ↳ {p.deliverable}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 20, textAlign: "center", border: `1px solid ${colors.accent}40` }}>
        <div style={{ fontSize: 11, color: colors.muted, marginBottom: 4 }}>INTERVIEW SIGNAL AFTER LAUNCH</div>
        <div style={{ fontSize: 13, color: colors.text, lineHeight: 1.8 }}>
          <span style={{ color: colors.accent }}>Domain expertise</span> + <span style={{ color: colors.accent2 }}>engineering initiative</span> + <span style={{ color: colors.accent4 }}>regulatory awareness</span>
          <br />
          <span style={{ fontSize: 11, color: colors.muted }}>Three things your competitors in WU / Mastercard / Barclays interviews won't have.</span>
        </div>
      </Card>
    </div>
  );
}
