import { useState } from "react";
import styles from "./admin.module.css";

function Admin() {
  const [settings, setSettings] = useState({
    name: "",
    tagline: "",
    date: "",
    venue: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("festivalSettings", JSON.stringify(settings));
  };
  return (
    <div class>
      <header>
        <h1>Admin</h1>
        <button>Log out</button>
      </header>

      <main>
        <aside>
          <h2>Menu</h2>
          <p>General</p>
          <p>Hero</p>
          <p>Content</p>
        </aside>

        <section>
          <h2>Configuration</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={settings.name}
              onChange={handleChange}
              placeholder="Event Name"
            />
            <input
              name="tagline"
              value={settings.tagline}
              onChange={handleChange}
              placeholder="Tagline"
            />
            <input
              type="date"
              name="date"
              value={settings.date}
              onChange={handleChange}
              placeholder="Date"
            />
            <input
              name="venue"
              onChange={handleChange}
              value={settings.venue}
              placeholder="Venue"
            />

            <textarea
              name="description"
              value={settings.description}
              onChange={handleChange}
              placeholder="Description"
            />

            <button type="submit">Save</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Admin;
