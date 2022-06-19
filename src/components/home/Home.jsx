import { useTranslation } from 'react-i18next';
import "./Home.css";

export default function Home() {
    const { t, i18n } = useTranslation()
    function OnLanguageChanged(e) {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div dir={t('dir')} className="container col-6">
            <p className='p1 container-fluid p-6 bg-primary text-white text-center'>
                <label> {t('hi')}</label>
            </p>
            <div>
                <select onChange={OnLanguageChanged} className="container form-select">
                    <option value='en'>English</option>
                    <option value='fr'>French</option>
                    <option value='fa'>فارسی</option>
                </select>
            </div>

            {/* <p>
                <div className='form-group'>
                    <label className='form-label'> {t('name')} </label>
                    <input type={"text"} className='form-control' placeholder={t('name')} />
                </div>
            </p>
            <p>
                <div className='form-group'>
                    <label> {t('family')} </label>
                    <input type={"text"} className='form-control' placeholder={t('family')} />
                </div>
            </p>
            <p>
                <div className='form-group'>
                    <label> {t('Email')} </label>
                    <input type={"Email"} className='form-control' placeholder={t('Email')} />
                </div>
            </p> */}

            <div class="input-group mb-3 mt-3">
                <span class="input-group-text">{t('person')}</span>
                <input type="text" class="form-control" placeholder={t('name')} />
                <input type="text" class="form-control" placeholder={t('family')} />
            </div>

            <div class="input-group mb-3">
                <input type="Email" class="form-control" placeholder={t('Email')} name="email" />
                <span class="input-group-text">@example.com</span>

            </div>

            <button className='btn btn-primary '>{t('submit')}</button>

            <div class="dropdown dropstart text-end">
                <button onClick={OnLanguageChanged} type="button" class="btn btn-primary ">
                    Dropstart
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" ></a></li>
                    <li><a class="dropdown-item">Active</a></li>
                    <li><a class="dropdown-item">Disabled</a></li>
                </ul>
            </div>
        </div>
    )
}