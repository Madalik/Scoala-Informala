import React from 'react'

function Header() {
    return (
      <section className="py-5 header text-center">
        <div className="container py-5 text-white">
          <header className="py-5">
            <h1 className="display-4">Bootstrap sticky navbar</h1>
            <p className="font-italic mb-1">
              Create a sticky top navbar using Bootstrap 4 utility classNamees.
            </p>
            <p className="font-italic">
              Snippet by
              <a className="text-white" href="https://bootstrapious.com/">
                <u>Bootstrapious</u>
              </a>
            </p>
          </header>
        </div>
      </section>
    );
}

export default Header
