import { speed } from './main_sort.js';

let delay = 10000 / speed;

export async function mergeSort(array, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Split the array into two halves
        await mergeSort(array, left, mid);
        await mergeSort(array, mid + 1, right);
        
        // Merge the sorted halves
        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    
    // Create temporary arrays
    const L = new Array(n1);
    const R = new Array(n2);
    
    // Copy data to temporary arrays
    for (let i = 0; i < n1; i++) {
        L[i] = {
            height: parseInt(array[2 * (left + i) + 1].style.height),
            element: array[2 * (left + i) + 1]
        };
        L[i].element.style.background = '#3498DB';  // Single color for all states
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    for (let j = 0; j < n2; j++) {
        R[j] = {
            height: parseInt(array[2 * (mid + 1 + j) + 1].style.height),
            element: array[2 * (mid + 1 + j) + 1]
        };
        R[j].element.style.background = '#3498DB';  // Single color for all states
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    let i = 0, j = 0, k = left;
    
    // Merge the temporary arrays back into array[left..right]
    while (i < n1 && j < n2) {
        await new Promise(resolve => setTimeout(resolve, delay));
        
        if (L[i].height <= R[j].height) {
            array[2 * k + 1].style.height = L[i].height + '%';
            array[2 * k + 1].style.background = '#3498DB';  // Single color for all states
            i++;
        } else {
            array[2 * k + 1].style.height = R[j].height + '%';
            array[2 * k + 1].style.background = '#3498DB';  // Single color for all states
            j++;
        }
        k++;
    }
    
    // Copy remaining elements of L[] if any
    while (i < n1) {
        await new Promise(resolve => setTimeout(resolve, delay));
        array[2 * k + 1].style.height = L[i].height + '%';
        array[2 * k + 1].style.background = '#3498DB';  // Single color for all states
        i++;
        k++;
    }
    
    // Copy remaining elements of R[] if any
    while (j < n2) {
        await new Promise(resolve => setTimeout(resolve, delay));
        array[2 * k + 1].style.height = R[j].height + '%';
        array[2 * k + 1].style.background = '#3498DB';  // Single color for all states
        j++;
        k++;
    }
} 