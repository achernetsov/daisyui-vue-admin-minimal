<!-- https://tailwind-dashboard-template-dashwind.vercel.app/app/settings-profile -->
<!-- https://github.com/srobbin01/daisyui-admin-dashboard-template -->
<template>
    <div id="form-container" class="bg-base-200">
        <div id="form-card" class="card bg-base-100 shadow-xl">
        <!-- <div id="form-card" class="card w-full lg:w-2/3 bg-base-100 shadow-xl"> -->
            <div class="card-body">
                <h2 class="card-title">Edit item</h2>
                <div className="divider mt-2"></div>

                <div id="form-inputs" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- <div class="form-control w-full max-w-xs"> -->
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type name here" class="input input-bordered w-full" />
                    </div>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Type</span>
                        </label>
                        <select class="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>
                    <div class="form-control md:col-span-2">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea class="textarea textarea-bordered h-24" placeholder="Item description"></textarea>
                    </div>
                </div>

                <div id="form-actions" class="card-actions justify-start">
                    <button class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>